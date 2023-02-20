import React from 'react';

function Projects() {
  return (
    <>
      <section className="projects" id="projects">
        <h3 className="projects-title">My Work</h3>
        <p>These are some of the projects I've worked on, click on them to explore.
          You can also check out more of my work on
          <a className="accent-link" href="https://codepen.io/NatalieSM/pens/public"><strong>Codepen</strong></a>
          and <a className="accent-link" href="https://github.com/NSM722"><strong>Github</strong></a>
        </p>
        <div className="images-container">
          <div className="image-div">
            <a className="project-link"
              href="https://nsm722.github.io/Unit-Converter/"
              target="_blank"
              rel="noreferrer">
              <img className="project-img" src="https://picsum.photos/200" alt="Unit Converter" />
              <div className="project-description">Unit converter</div>
            </a>
          </div>
          <div className="image-div">
            <a className="project-link" href="https://nsm-flask-app.herokuapp.com/" target="_blank"
              rel="noreferrer">
              <img className="project-img" src="https://picsum.photos/200" alt="Language App" />
              <div className="project-description">Flask App</div>
            </a>
          </div>
          <div class="image-div">
            <a class="project-link" href="https://github.com/NSM722/BikEEE" target="_blank"
              rel="noreferrer">
              <img class="project-img" src="https://picsum.photos/200" alt="Cycle Hub App" />
              <div class="project-description">React App</div>
            </a>
          </div>
          <div class="image-div">
            <a class="project-link" href="https://nsm722.github.io/Home.html" target="_blank"
              rel="noreferrer">
              <img class="project-img" src="https://picsum.photos/200" alt="Coffee Shop Website" />
              <div class="project-description">Coffee Shop Website</div>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects;