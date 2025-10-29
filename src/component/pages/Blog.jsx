import React, { useRef } from 'react'
import '../css/Blog.css'
import { blogs } from '../data/data'
import { Link } from 'react-router-dom'
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Blog = () => {
  const scrollRef = useRef()
  function handleLeft(){
    console.log(scrollRef.current)
    let container = scrollRef.current;
    container.scrollLeft  -= 300;
  }
  function handleRight(){
    console.log(scrollRef.current)
    let container = scrollRef.current;
    container.scrollLeft +=300;
  }



  return (
    <div className="blog">
      <h2>Discover New Blog Posts</h2>
      <p>
        Stay updated with our blog content
      </p>
      <div className="blog_constiner" ref={scrollRef}>
        {
          blogs.map((bl) => {
            return(
              <div className="blog_cart" key={bl.id}>
                <img src={bl.image} alt="" />
                <p>{bl.category}</p>
                <h4>{bl.title}</h4>
                <Link to="#">Learn More</Link>
              </div>
            )
          })
        }
        <IoIosArrowDropleftCircle size={33} className='left' onClick={handleLeft}/>
      <IoIosArrowDroprightCircle size={34} className='right' onClick={handleRight}/>
      </div>
       
    </div>
  )
}

export default Blog