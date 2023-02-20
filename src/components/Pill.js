import React from 'react';
import skills from '../skillsData'

function Pill() {
  const skillsHtml = skills.map(skill => (
    <span key={skill} className="pill">{skill}</span>
  ))

  return (
    <>
      <p>
        {skillsHtml}
      </p>
    </>
  )
}

export default Pill;
