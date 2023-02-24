import React from 'react';
import skills from '../skillsData'

function Skills() {
  const skillsHtml = skills.map(({ id, src, description }) => (
    <img
      key={id}
      className="dev-icon"
      src={src}
      // height="110"
      // width="110"
      alt={description} />
  ))

  return (
    <>
      <div className='skills'>
        {skillsHtml}
      </div>
    </>
  )
}

export default Skills;
