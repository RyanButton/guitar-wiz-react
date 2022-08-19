import { Link } from "react-router-dom";

function Tips() {
  return (
    <div>
      <div>
        <h1>Tips</h1>
        <h2>Tricks from the masters</h2>
        <p className="s1">
          This section is a little guide on some tips and tricks for bringing
          your guitar playing to the snext level. Everything from getting in
          tune to some basic warmup excercises.
        </p>
      </div>

      <div>
        <Link to="/tips/getting-in-tune">
          <h3>Getting in Tune</h3>
        </Link>
        <p>
          The first step to playing guitar is getting in tune (your neighbours
          will thank you!)
        </p>
      </div>
      <div>
        <Link to="/tips/guitar-maintenance">
          <h3>Guitar Maintenance</h3>
        </Link>
        <p>
          Keeping your guitar up to scratch will not only help maintain it's
          value, but also help with how to guitar plays and sounds.
        </p>
      </div>
      <div>
        <Link to="/tips/1234-exercise">
          <h3>1-2-3-4 Exercise</h3>
        </Link>
        <p>
          A cool little exercise to warm up the fingers and build muscle memory
          around the fret board.
        </p>
      </div>
    </div>
  );
}

export default Tips;
