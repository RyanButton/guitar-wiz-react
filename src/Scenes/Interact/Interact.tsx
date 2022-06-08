import { useMemo } from "react";
import Guitar from "react-guitar";
import useSound from "react-guitar-sound";
import { standard } from "react-guitar-tunings";

export default function Interact() {
  const strings = useMemo(() => [0, 1, 2, 2, 0, -1], []);
  const { play, strum } = useSound({ fretting: strings, tuning: standard });
  return (
    <>
      {"Interactive Guitar"}
      <Guitar strings={strings} onPlay={play} />
    </>
  );
}
