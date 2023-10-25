import React, { useState, useEffect } from 'react';

function Projects() {
  const [myRepos, setMyRepos] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  const reposNames = [
    'QuoteGenie', 'Personal-Dashboard', 
    'Customer-Snap-Dashboard', 'symmetrical-giggle',
    'Profile-Navigator','Color-Scheme-Generator',
    'Expense_Tracker','Fun-Sports-Trivia', 'CycleHub',
  ]

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://api.github.com/users/NSM722/repos?page=1&per_page=1000`)
      .then(response => response.json())
      .then(data => {
        setMyRepos(data)
        setIsLoading(false)
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
        {
        isLoading ? 
        <h2>Fetching results, please be patient...</h2> :
        reposToDisplay
      }
      </section>
    </>
  )
}

export default Projects;
