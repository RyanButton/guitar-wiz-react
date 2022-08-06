import { useState, useMemo, useEffect } from "react";
import Guitar, { getRenderFingerSpn } from "react-guitar";
import { standard } from "react-guitar-tunings";
import useSound, { StringInstrument, withSoundFont } from "react-guitar-sound";
import styled from "styled-components";
import { Button } from "@mui/material";
import { VolumeOff, VolumeUp } from "@mui/icons-material";
import { chordLookup as keyLookup } from "../../../components/Tables/chord-lookup";
import { chordLookup } from "./chord-lookup";
import getKeySuffix from "../../../utils/get-key-suffix";

const GuitarWrapper = styled.div`
  margin-top: 1em;
  @media only screen and (max-width: 700px) {
    font-size: 2.1vw;
  }
`;
export default function InteractiveGuitar({
  keyStr,
  keyType,
}: {
  keyStr: string;
  keyType: string;
}) {
  const [strings, setStrings] = useState<number[]>([0, 0, 0, 0, 0, 0]);
  const [playSound, setPlaySound] = useState(false);
  const [muted, setMuted] = useState(false);

  const { play, strum } = useSound({
    fretting: strings,
    tuning: standard,
    muted,
  });

  useEffect(() => {
    if (playSound) {
      strum();
      setPlaySound(false);
    }
  }, [playSound, strum]);

  const chordsInKey = useMemo(() => {
    const chords =
      keyLookup[(keyStr + getKeySuffix(keyType)) as keyof typeof keyLookup];
    const major = new RegExp("maj");
    const minor = new RegExp("min");
    const dim = new RegExp("dim");
    return chords.map((chordsInKey: string[]) => {
      return chordsInKey.map((chord) => {
        if (major.test(chord)) {
          const [note] = chord.split(major);
          return { [chord]: chordLookup[note]?.maj || [] };
        } else if (minor.test(chord)) {
          const [note] = chord.split(minor);
          return { [chord]: chordLookup[note]?.min || [] };
        } else if (dim.test(chord)) {
          const [note] = chord.split(dim);
          return { [chord]: chordLookup[note]?.dim || [] };
        }
        return [];
      });
    });
  }, [keyStr, keyType]);
  return (
    <>
      <GuitarWrapper>
        <Guitar
          strings={strings}
          renderFinger={getRenderFingerSpn(standard)}
          onPlay={play}
          onChange={setStrings}
          center
        />
      </GuitarWrapper>
      <div style={{ marginTop: "0.5em" }}>
        {chordsInKey[0].map((chord: Record<string, any>) => {
          return (
            <>
              <Button
                style={{
                  textTransform: "none",
                }}
                variant="contained"
                color="inherit"
                onClick={() => {
                  setStrings(chord[Object.keys(chord)[0]]);
                  setPlaySound(true);
                }}
              >
                {Object.keys(chord)[0]}
              </Button>
            </>
          );
        })}
        <Button
          variant="contained"
          color="inherit"
          onClick={() => setMuted(!muted)}
        >
          {muted ? <VolumeOff /> : <VolumeUp />}
        </Button>
      </div>
    </>
  );
}
