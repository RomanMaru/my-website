import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import { GiSunglasses } from 'react-icons/gi'
import { gsap } from 'gsap'


const Navigation = () => {
  let menu = useRef(null)

  useEffect(() => {
    gsap.from(menu, 1.8, {
      delay: 0.8,
      ease: "power3.out",
      y: 50,
      opacity: 0,
    })
  }, [menu])

  return (
    <header>
      <div className="inner-header">
        <div className="logo">
          <GiSunglasses />
        </div>
        <nav ref={el => (menu = el)}>
          <Link to='/' activeClassName="active">home</Link>
          <Link to='/about' activeClassName="active">about</Link>
          <Link to='/work' activeClassName="active">work</Link>
          <Link to='/contact' activeClassName="active">contact</Link>
        </nav>
      </div>
    </header>


  )
}

export default Navigation