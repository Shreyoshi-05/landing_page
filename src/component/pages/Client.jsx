import React, { useState } from 'react'
import '../css/Client.css'
import { cardData, courses } from '../data/data'

const Client = () => {
  const[dotnum , setDotNum] = useState(0)
  let start = dotnum*3;
  let end = 3 * (dotnum+1)

  return (
    <div className="client">
      <div className="heading">
        <h2>
          Our Clients
        </h2>
        <div className="client_logos">
          <img src="/li1.png" alt="" />
          <img src="/li2.png" alt="" />
          <img src="/li3.png" alt="" />
          <img src="/li4.png" alt="" />
          <img src="/li5.png" alt="" />
        </div>
      </div>

      <div className="course">
        <div className="course_h2">
          <h2>Choose The Perfect Course For You</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ut deleniti nulla doloremque repellat voluptates quasi laudantium! Fugiat molestias voluptas inventore eum, enim optio sint debitis cumque, rem omnis atque suscipit amet quia exercitationem!
        </p>

        <div className="course_slide">
          {
            courses.slice(start,end).map((item) => {
              return(
                <div style={{backgroundImage: `url(${item.background})` }} className="box" key={item.id}>
                <img src={item.image} alt="" /> 
                <h3>{item.title}</h3>
        <p>{item.description}</p>
              </div>
              )
            })
          }
        </div>

        <div className="dot">
          <button className={dotnum == 0 ?"active" : 'dd'} onClick={()=>setDotNum(0)}></button>
          <button className={dotnum == 1 ?"active" : 'dd'} onClick={()=>setDotNum(1)}></button>
          <button className={dotnum == 2 ?"active" : 'dd'} onClick={()=>setDotNum(2)}></button>
        </div>
      </div>

      <img src="/midimg1.png" alt="" />

      <div className="rec_tr">
        {
          cardData.map((cart,idx) => {
            return(
              <div className="cart" key={idx}>
                <img src={cart.image} alt="" />
                <h3>{cart.heading}</h3>
                <p>{cart.description}</p>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Client