import { Link } from 'react-router-dom'

function Scales() {
  return (
    <div>
      <div>
        <h1>Scales</h1>
        <h2>Scales? Like on a fish?</h2>
        <p className="s1">
          Scales are the back bone of melody within music. Lead guitarist who
          shred licks without even thinking about all know their scales back to
          front. As well as this, you may have already noticed that chord in key
          follow a scale. For example,{' '}
          <Link to="/chords-in-key/chords-in-major">chords in major</Link>{' '}
          follow a major scale, and play a chord at every interval of this
          scale.
        </p>
        <p className="s2">Learn more about scales below.</p>
      </div>

      <div>
        <Link to="/scales/major-scale">
          <h3>Major Scale</h3>
        </Link>
      </div>

      <div>
        <Link to="/scales/minor-scale">
          <h3>Minor Scale</h3>
        </Link>
      </div>

      <div>
        <Link to="/scales/pentatonic-scale">
          <h3>Pentatonic Scale</h3>
        </Link>
      </div>

      <div>
        <Link to="/scales/blues-scale">
          <h3>Blues Scale</h3>
        </Link>
      </div>
    </div>
  )
}

export default Scales
