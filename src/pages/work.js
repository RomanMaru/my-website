import React from 'react'
import { FaRegEye, FaFeatherAlt } from 'react-icons/fa'

const projects = [
  {
    id: 0,
    link: 'https://romanmaru.github.io/chuck_norris_jokes.github.io/',
    github_link: 'https://github.com/RomanMaru/chuck_norris_jokes.github.io',
    title: "Chuck Norris",
    body: 'fwefwef',
    stack: ['HTML','Skeleton.css','Vanilla JS','External API']
  },
  {
    id: 1,
    link: 'https://react-my-burger-11ab9.web.app/',
    github_link: 'https://github.com/RomanMaru/myBurger_app',
    title: "Burger Builder",
    body: 'fwefwef',
    stack: ['React JS','Redux','Axios','Firebase']
  },
  {
    id: 2,
    link: 'https://awesome-lewin-8e4f41.netlify.app',
    github_link: 'https://github.com/RomanMaru/RomanMaru.github.io',
    title: "React 3D",
    body: 'fwefwef',
    stack: ['Three.js','React Three Fiber','Sass','React-Spring']
  },
  {
    id: 3,
    link: 'https://serene-bhabha-cd198c.netlify.app/',
    github_link: 'https://github.com/RomanMaru/awards-clone',
    title: "Awwwards Rebuilt",
    body: 'fwefwef',
    stack: ['Gatsby JS','Framer Motion','Styled Components','Netlify']  
  },
]


const Card = ({details}) => {
  return (
    <div className='card'>
        <div className="project_icons">
          <a href={details.link} target='_blank'><FaRegEye/></a>
          <a href={details.github_link} target='_blank'><FaFeatherAlt/></a>
        </div>
        <h3 className="project_title">{details.title}</h3>
        <hr className='hr1'/>
        <p className="project_body">{details.body}</p>
        <hr className='hr2'/>
        <div className="project_stack">
          <ul>
            <li>{details.stack[0]}</li>
            <li>{details.stack[1]}</li>
            <li>{details.stack[2]}</li>
            <li>{details.stack[3]}</li>
          </ul>
        </div>
      </div>
  )
}
const Work = () => {
  return (
    <div className="work">
      {projects.map((details, index) => (
        <Card key={index} details={details}/>
      ))}
    </div>
  )
}


export default Work