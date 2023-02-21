import React from 'react';
import Pill from "../components/Pill";

function Home() {
  return (
    <>
      <section>
        <h2 className="intro-title">Hi, I am a Web Developer experienced in both Frontend and Backend technologies. </h2>
        <Pill />
        <img className="intro-image" src="https://picsum.photos/200" alt="My profile" />
      </section>
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