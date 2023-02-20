import React from "react";

function Home() {
  return (
    <>
      <section>
        <h2 className="intro-title">Hi, I am a Web Developer experienced in both Frontend and Backend technologies. </h2>
        <p>
          <span className="pill">HTML</span>
          <span className="pill">CSS</span>
          <span className="pill">JavaScript</span>
          <span className="pill">Python</span>
          <span className="pill">Bootstrap</span>
          <span className="pill">Flask</span>
          <span className="pill">Git</span>
          <span className="pill">Github</span>
          <span className="pill">React</span>
          <span className="pill">Kanban</span>
          <span className="pill">Trello</span>
        </p>
        <img className="intro-image" src="https://picsum.photos/200" alt="My profile" />
      </section>
      <hr />
      <section className="about" id="about">
        <h3 className="about-title">About Me</h3>
        <p>
          I specialize in creating responsive websites and applications with a focus on optimizing
          the user experience and providing necessary backend support. I use organizational tools like
          Trello boards and Kanban to manage my projects efficiently. As a developer, I am committed to
          learning new stacks, working collaboratively, and following web performance and accessibility
          best practices. I enjoy attending tech meetups, conferences and exploring opportunities to contribute
          to open-source projects.
        </p>
      </section>
    </>

  )
}

export default Home;