function About() {
  return (
    <div>
      <h1>About Guitar Wiz</h1>

      <div className="about-me-header">
        <div className="s3">
          My name's Ryan and I've been playing guitar since I was 11 years old.
          As well as a guitar enthusiast, I'm a full stack web developer. I
          created Guitar Wiz to be the resource the <em>that I needed</em> when
          I was a first learning guitar. If I can help one guitarist, than I
          have done my job. <br />
          <br />
          Guitar Wiz is 100% free. I don't believe in keeping information behind
          pay walls. However if you wish to support Guitar Wiz, simply share it
          with all your guitarist mates! ;) <br />
          <br />
          If you're interested in programming and web development you can also
          check out my
          <a href="https://github.com/RyanButton">GitHub account</a>.<br />
          <br />
          I wish you all the best in your guitar playing journey! -Ryan
          <br />
          <br />
        </div>

        <div>
          <img
            className="profile-pic"
            src="/images/about/ryan.jpg"
            alt="Big Smelly Guy (Website Creator Ryan)"
          />
        </div>
      </div>

      <p className="s2"></p>
    </div>
  );
}
export default About;
