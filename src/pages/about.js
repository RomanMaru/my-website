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
            <p>Hello, my name is Roman. I'm a Web Developer based in Los Angeles, CA.
I just love World-Wide-Web. I look forward to all the possibilities of the Web. I started my journey from programming languages such as Java and Ruby (I consider the last one to be the most elegant and beautiful). I'm currently working and studying JavaScript ecosystem that I love a lot. It's so exciting how powerful and universal this language has become. I'm also plannig to dive deep into Three.js, Node.js and animation libraries such as GSAP and Framer Motion. Outside of work I have a beautiful  wife and two addorable cats. I love sports activities, art and music(follow me on Spotify). Shoot me an email and I'll be glad to work with you.  </p>
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