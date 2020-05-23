import React from 'react'
import { DiJavascript1, DiBootstrap, DiNodejsSmall, DiReact, DiSass, DiGit } from 'react-icons/di'
import { RiGatsbyLine } from 'react-icons/ri'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const About = ({ data }) => (
    <div className="about">
        <div className="avatar">
            <Img fluid={data.avatar.childImageSharp.fluid} />
        </div>
        <div className="right">
            <h3 >Bio</h3>
            <p>Nullam ac convallis nisl, molestie porttitor nulla. Ut nec tempor erat. Morbi aliquam ultrices accumsan. ac convallis nisl, molestie</p>
            <h3>Skills & Interests</h3>
            <div className="about_icons">
                <DiJavascript1 />
                <DiBootstrap />
                <DiGit />
                <DiReact />
                <DiSass />
                <RiGatsbyLine />
                <DiNodejsSmall />
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