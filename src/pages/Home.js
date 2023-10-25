import React from 'react';
import Skills from '../components/Skills';
import Me from '../images/Me.png'

function Home() {
  return (
    <>
      <section className='intro'>
        <div className='intro-body'>
          <h2 className='intro-title'>Hi, I am a Web Developer experienced in both Frontend and Backend technologies. </h2>
          <p>
            I specialize in creating responsive websites and applications with a focus on optimizing
            the user experience and providing necessary backend support. I use organizational tools like
            Trello boards and Kanban to manage my projects efficiently, while I am also well-versed in agile 
            methodologies. I am committed to learning new stacks, working collaboratively, following web performance 
            and accessibility best practices. I actively engage in the tech community by attending tech meetups, conferences 
            and exploring opportunities to contribute to open-source projects.
          </p>
        </div>
        <img className='intro-image' src={Me} alt='Myself smiling' />
      </section>
      <Skills />
    </>

  )
}

export default Home;
