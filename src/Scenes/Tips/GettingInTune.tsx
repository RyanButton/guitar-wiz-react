import { Link } from 'react-router-dom'

function GettingInTune() {
  return (
    <div>
      <h1>Getting in tune</h1>

      <h2 className="s1">What is tuning?</h2>
      <p className="s2">
        Getting in tune is the first and foremost thing you should do when
        picking up a guitar. It doesn't matter how well you can play, if your
        guitar is out of tune you will sound like garbage. There are many
        different tunings, such as standard tuning (EADGBe), drop tunings such
        as drop D (DADGBe), hell you can even tune your guitar to be a chord e.g
        open Em tuning (EBEGBe).
      </p>

      <h2 className="s1">Tuning pitches</h2>
      <p className="s2">
        In standard tuning the most common pitch is 440Hz, also known as
        'concert pitch' however this can be tweaked to your liking. Some
        guitarists prefer a slightly higher pitch such as 450Hz and some prefer
        a lower pitch such as 430Hz.
      </p>

      <h2 className="s1">Getting in tune!</h2>
      <p className="s2">
        To get in tune it is recommended that you buy a guitar tuner, although
        there are many online tuner you can utilize such as{' '}
        <a href="https://yousician.com/guitartuna">Yousician's Guitar Tuna.</a>{' '}
        Over time and with practice, you will be able to tune your guitar by
        ear, which is great if you don't have a tuner handy.
      </p>

      <p className="next">
        Up next <Link to="/tips/guitar-maintenance">Guitar Maintenance</Link>
      </p>
    </div>
  )
}

export default GettingInTune
