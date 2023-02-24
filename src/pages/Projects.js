import React, { useState, useEffect } from 'react';

function Projects() {
  const [myRepos, setMyRepos] = useState([])
  const baseURL = `https://api.github.com/users/NSM722/repos`

  const reposNames = [
    'CycleHub', 'Personal-Dashboard', 'Restaurant-Ordering-App',
    'Responsive-semantically-structured-website', 'Color-Scheme-Generator',
    'Language-exchange-app'
  ]

  useEffect(() => {
    fetch(baseURL)
      .then(response => response.json())
      .then(data => {
        setMyRepos(data)
      })
      .catch(err => console.error(err))
  }, [])

  const filteredRepos = myRepos.filter(repo => reposNames.includes(repo.name));
  console.log(filteredRepos)

  const reposToDisplay = filteredRepos.map(item => (
    <div className="project-card" key={item.id}>
      <a className="project-link"
        href={item.homepage}
        target="_blank"
        rel="noreferrer">
        <img className="project-img" src="https://picsum.photos/id/8/200" alt={item.name} />
        <div className="project-description">{item.name}</div>
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
