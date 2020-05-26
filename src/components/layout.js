import React, { useEffect, useRef } from 'react'
import Navigation from './navigation'
import Background from '../components/animatedBackground/animatedBackground'
import { TransitionProvider, TransitionViews } from 'gatsby-plugin-transitions'
import { FaGithub, FaSpotify } from 'react-icons/fa'
import { TiSocialInstagramCircular } from 'react-icons/ti'
import gsap from 'gsap'
import { Helmet } from 'react-helmet'

const Layout = ({ location, children }) => {
  let social = useRef(null)

  useEffect(() => {
    gsap.from(social, 2, {
      delay: 1,
      opacity: 0,
      x: -50,
      ease: "elastic.out(1, 0.3)"
    })
  }, [])

  return (
    <div className="container">
      <Helmet>
        <title>Roman Maru</title>
      </Helmet>
      <div ref={el => (social = el)} className="social">
        <a href="https://github.com/RomanMaru" target="_blank"><FaGithub /></a>
        <a href="https://open.spotify.com/user/i3pj15haqox75a75jhk13hs5r" target="_blank"><FaSpotify /></a>
        <a href="https://www.instagram.com/roman.maru.siberian/?hl=en" target="_blank"><TiSocialInstagramCircular /></a>
      </div>
      <Navigation />
      <main>
        <TransitionProvider
          location={location}
          mode='successive'
          enter={{
            opacity: 0,
            transform: "translate3d(0,20vh,0)",
            config: {
              mass: 100,
              tension: 50,
              friction: 10,
              duration: 900
            }
          }}
          usual={{
            opacity: 1,
            transform: "translate3d(0vh,0vh,0)"
          }}
          leave={{
            opacity: 0,
            transform: "translate3d(0vh,-20vh, 0)",
            config: {
              duration: 700
            }
          }}
        >
          <TransitionViews>
            {children}
          </TransitionViews>
        </TransitionProvider>
        <Background />
      </main>
    </div>
  )
}

export default Layout
