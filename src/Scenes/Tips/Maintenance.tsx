function Maintenance() {
  return (
    <div>
      <h1>Guitar maintenance</h1>

      <h2 className="s1">How to maintain your guitar</h2>
      <p className="s2">
        Maintaining your guitar will not only preserve the value of your guitar,
        but it will also help it to produce a great sound and ease the playing
        of your instrument. Some basic maintenance every guitarist should know
        how to do is a <em>string change.</em> There are also some more advanced
        forms of maintenance that should be performed on your guitar, such as
        intonating.
      </p>

      <h2 className="s1">Changing your strings</h2>
      <p className="s2">
        Head down to your local music shop and ask them about a new set of
        strings. The gauge (thickness) of your strings is important. If you play
        fast lead guitar on an electric get lower gauge strings, if you play
        rhythm guitar on acoustic get higher gauge strings. There are a lot of
        factors that go into your choice of string so it helps to do your
        research on what you want out of your strings. Changing your strings is
        tricky at first, but with a little practice it will become second
        nature.
      </p>

      <p className="s2">
        Below is a tutorial by a popular guitar youtube channel{" "}
        <a href="https://www.youtube.com/channel/UChCj02Oamkp6OO3xgWpOzzA">
          Acoustic Life
        </a>{" "}
        on how to change your strings on an acoustic guitar.
      </p>
      <div className="model-box">
        <iframe
          className="model"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/2fPrnwS9qi4"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <h2 className="s1">Intonation, action, etc</h2>
      <p className="s2">
        Other maintenance of your guitar to keep in mind is the intonation and
        action of your guitar. The intonation of your guitar relates to how well
        your guitar is in pitch. You can easily check your intonation by playing
        an open string and the twelfth fret on the same string into a tuner, and
        seeing if the pitch deviates.
      </p>

      <p className="s2">
        The action of your guitar is how high or low the strings are off the
        fret board. You want your action to be in the goldy locks zone of being
        low enough that it is easy to play, but high enough as to not cause any
        rattling.
      </p>

      <p className="s2">
        For any help with guitar maintenance, seek out a Luthier in your local
        area.
      </p>

      <p className="next">
        Up next <a href="/tips/1234-exercise">1234 exercise</a>
      </p>
    </div>
  );
}

export default Maintenance;
