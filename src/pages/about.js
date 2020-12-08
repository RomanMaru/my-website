import React from 'react'
import { DiJsBadge, DiBootstrap, DiReact, DiSass, DiGit, } from 'react-icons/di'
import {FiFigma} from 'react-icons/fi'
import { RiGatsbyLine } from 'react-icons/ri'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'


const About = ({ data }) => (
    <div className="about">
        <div className="avatar">
            <Img fluid={data.avatar.childImageSharp.fluid} />
        </div>
        <div className="right">
            <h3 >About</h3>
            <p>Hello, I'm Roman and I'm a Web Developer based in Los Angeles, CA. I absolutely love World-Wide-Web. Programming for me is a mix of science and art, both of which I'm truly fond of. I started my journey from programming languages like Java and Ruby (I consider the last one to be the most beautiful and elegant ). I'm currently working and studying JavaScript ecosystem that I like a lot. It's exciting how powerful and universal this language has become. I also plan on diving deep into Three.js, Node.js and animation libraries such as GSAP and Framer Motion. Outside of work I have a gorgeous wife and two adorable cats. I love sports activities, art and music(follow me on Spotify). I'm looking forward to gaining new knowledge and experience. Shoot me an email and I'll be glad to work with you.</p>
            <h3>Skills</h3>
            <div className="about_icons">
                <DiJsBadge />
                <DiBootstrap />
                <DiGit />
                <DiReact />
                <DiSass />
                <RiGatsbyLine />
                <FiFigma />
            </div>
        </div>
    </div>
)

export const query = graphql`
  query {
    avatar: file(relativePath: { eq: "avatar.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
      }
    }
  }
`

export default About