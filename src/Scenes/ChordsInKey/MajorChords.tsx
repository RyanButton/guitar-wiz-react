import { chordLookup } from '../../Components/Tables/chord-lookup'

export default function MajorChords({ keyStr }: { keyStr: string }) {
  const chords = chordLookup[keyStr as keyof typeof chordLookup]
  return (
    <>
      <h2>Common chord progressions:</h2>
      <div className="chord-table-wrapper">
        <div className="prog-table">
          <table id="prog-table">
            <tr>
              <th>Roman Numerals</th>
              <th>Chords</th>
            </tr>
            <tr>
              <td>I - IV - V</td>
              <td>{`${chords[0][0]} - ${chords[0][3]} - ${chords[0][4]}`}</td>
            </tr>
            <tr>
              <td>I - VI - IV - V</td>
              <td>{`${chords[0][0]} - ${chords[0][5]} - ${chords[0][3]} - ${chords[0][4]}`}</td>
            </tr>
            <tr>
              <td>II - V - I</td>
              <td>{`${chords[0][1]} - ${chords[0][4]} - ${chords[0][0]}`}</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  )
}
