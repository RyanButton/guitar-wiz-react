import React from 'react'
import ChordKeyTable from '../../Components/Tables/ChordKeyTable'
import InteractiveGuitar from './Components/InteractiveGuitar'
import MajorChords from './MajorChords'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import MinorChords from './MinorChords'

const BUTTON_HEIGHT = '40px'
const KEY_BUTTON_WIDTH = '100px'
const TYPE_BUTTON_WIDTH = '100px'

function ChordsinKey() {
  const [key, setKey] = React.useState<string>('C')
  const [keyType, setKeyType] = React.useState<string>('Major')

  return (
    <div>
      <div>
        <h1>Chords in Key</h1>
      </div>

      <p className="s2">
        The following chart presents all common chords in key. The position on
        the scale is determined by roman numerals. Be sure to select your
        desired key.
      </p>

      <ul>
        <li>
          <b>{keyType} chord sequence:</b>
          {keyType === 'Major' && 'Maj Min Min Maj Maj Min Dim'}
          {keyType === 'Minor' && 'Min Dim Maj Min Min Maj Maj'}
        </li>
      </ul>

      <FormControl>
        <InputLabel id="note-label">Key</InputLabel>
        <Select
          style={{
            textTransform: 'none',
            maxWidth: KEY_BUTTON_WIDTH,
            maxHeight: BUTTON_HEIGHT,
            minWidth: KEY_BUTTON_WIDTH,
            minHeight: BUTTON_HEIGHT,
          }}
          labelId="note-label"
          id="select-note-label"
          value={key}
          label="key"
          onChange={(event) => setKey(event.target.value)}
        >
          <MenuItem value={'C'}>C</MenuItem>
          <MenuItem value={'Db'}>C#/Db</MenuItem>
          <MenuItem value={'D'}>D</MenuItem>
          <MenuItem value={'Eb'}>D#/Eb</MenuItem>
          <MenuItem value={'E'}>E</MenuItem>
          <MenuItem value={'F'}>F</MenuItem>
          <MenuItem value={'Gb'}>F#/Gb</MenuItem>
          <MenuItem value={'G'}>G</MenuItem>
          <MenuItem value={'Ab'}>Ab</MenuItem>
          <MenuItem value={'A'}>A</MenuItem>
          <MenuItem value={'Bb'}>A#/Bb</MenuItem>
          <MenuItem value={'B'}>B</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel id="type-label">Type</InputLabel>
        <Select
          style={{
            maxWidth: TYPE_BUTTON_WIDTH,
            maxHeight: BUTTON_HEIGHT,
            minWidth: TYPE_BUTTON_WIDTH,
            minHeight: BUTTON_HEIGHT,
          }}
          labelId="type-label"
          id="select-type-label"
          value={keyType}
          label="type"
          onChange={(event) => setKeyType(event.target.value)}
        >
          <MenuItem value={'Major'}>Major</MenuItem>
          <MenuItem value={'Minor'}>Minor</MenuItem>
        </Select>
      </FormControl>

      <div style={{ marginTop: '0.5em' }}>
        <ChordKeyTable keyStr={key} keyType={keyType} />
      </div>

      <InteractiveGuitar keyStr={key} keyType={keyType} />

      <div style={{ marginBottom: '2em' }}>
        {keyType === 'Major' && <MajorChords keyStr={key} />}
        {keyType === 'Minor' && <MinorChords keyStr={key} />}
      </div>
    </div>
  )
}

export default ChordsinKey
