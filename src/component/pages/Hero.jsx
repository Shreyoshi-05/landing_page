import React from 'react'
import '../css/Hero.css'

const Hero = () => {
  return (
    <div className="hero_page">
    <div className="hero">
      <div className="hero_left">
        <h2>Learn to Code Roblox & Scratch Games</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ratione commodi, voluptas fugiat eos dolorum, doloribus sint, nulla temporibus a neque vel omnis error placeat deserunt consequuntur optio praesentium voluptate.
        </p>

        <div className="hero_btn">
          <button>Get Free Trial</button>
          <button>Check Courses</button>
        </div>
      </div>
      <div className="hero_right">
        <img src="/hero_ri.png" alt="" />
      </div>
    </div>

    <div className='cartoon'>
      <img src="/cartoon.png" alt="" />
    </div>
    </div>
  )
}

export default Hero