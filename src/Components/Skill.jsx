import React from 'react'
import skills from './skills.json'
import './skillStyles.css'

const Skill = () => {
  return (
    <>
    <div className='main'>
      <h1 className='text-4xl font-bold'>SKILLS</h1>
      <div className='container'>
      {skills.map((data) => (
        <>
        <div className="items" key={data.id}>
             <div className="item">
             <img src={data.imageSrc} alt={data.title} className="skill-image" />
              <h3>{data.title}</h3>
             </div>
        </div>
        </>
      ))}
      </div>
    </div>
    </>
  )
}

export default Skill