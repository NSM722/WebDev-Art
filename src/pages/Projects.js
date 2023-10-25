import React, { useState, useEffect } from 'react';

function Projects() {
  const [myRepos, setMyRepos] = useState([])

  const reposNames = [
    'QuoteGenie', 'Personal-Dashboard', 
    'Customer-Snap-Dashboard', 'symmetrical-giggle',
    'Profile-Navigator','Color-Scheme-Generator',
    'Expense_Tracker','Fun-Sports-Trivia', 'CycleHub',
  ]

  useEffect(() => {
    fetch(`https://api.github.com/users/NSM722/repos?page=1&per_page=1000`)
      .then(response => response.json())
      .then(data => {
        setMyRepos(data)
      })
      .catch(err => console.error(err))
  }, [])

  const filteredRepos = myRepos.filter(repo => reposNames.includes(repo.name));

  const reposToDisplay = filteredRepos.map(({ homepage, id, name, html_url }) => (
    <div className="project-card" key={id}>
      <a className="project-link"
        href={homepage || html_url}
        target="_blank"
        rel="noreferrer">
        <div className="project-description">{name !== 'symmetrical-giggle' ? name : 'QuoteGenie Mobile App'}</div>
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
