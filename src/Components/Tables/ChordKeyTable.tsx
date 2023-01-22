import getKeySuffix from '../../utils/get-key-suffix'
import { chordLookup } from './chord-lookup'

export default function ChordKeyTable({
  keyStr,
  keyType,
}: {
  keyStr: string
  keyType: string
}) {
  const keySuffix = getKeySuffix(keyType)
  const chords = chordLookup[(keyStr + keySuffix) as keyof typeof chordLookup]
  return (
    <div className="chord-table-wrapper">
      <div className="chord-table">
        <table id="major-table">
          <tr>
            <th>I</th>
            <th>II</th>
            <th>III</th>
            <th>IV</th>
            <th>V</th>
            <th>VI</th>
            <th>VII</th>
          </tr>
          <tr>
            <td>{chords[0][0]}</td>
            <td>{chords[0][1]}</td>
            <td>{chords[0][2]}</td>
            <td>{chords[0][3]}</td>
            <td>{chords[0][4]}</td>
            <td>{chords[0][5]}</td>
            <td>{chords[0][6]}</td>
          </tr>
          <tr>
            <td>{chords[1][0]}</td>
            <td>{chords[1][1]}</td>
            <td>{chords[1][2]}</td>
            <td>{chords[1][3]}</td>
            <td>{chords[1][4]}</td>
            <td>{chords[1][5]}</td>
            <td>{chords[1][6]}</td>
          </tr>
        </table>
      </div>
    </div>
  )
}
