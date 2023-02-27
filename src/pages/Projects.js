import React, { useState, useEffect } from 'react';

function Projects() {
  const [myRepos, setMyRepos] = useState([])

  const reposNames = [
    'CycleHub', 'Personal-Dashboard', 'Restaurant-Ordering-App',
    'Responsive-semantically-structured-website', 'Color-Scheme-Generator',
    'Language-exchange-app'
  ]

  useEffect(() => {
    fetch(`https://api.github.com/users/NSM722/repos`)
      .then(response => response.json())
      .then(data => {
        setMyRepos(data)
      })
      .catch(err => console.error(err))
  }, [])

  const filteredRepos = myRepos.filter(repo => reposNames.includes(repo.name));

  const reposToDisplay = filteredRepos.map(({ homepage, id, name }) => (
    <div className="project-card" key={id}>
      <a className="project-link"
        href={homepage}
        target="_blank"
        rel="noreferrer">
        <div className="project-description">{name}</div>
      </a>
    </div>
  ))

  return (
    <>
      <section className="projects-wrapper">
        {reposToDisplay}
      </section>
    </>
  )
}

export default Projects;
