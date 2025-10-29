import React, { useState } from "react";
import "../css/testimonial.css";
import { question } from "../data/data";
import { IoMdAdd } from "react-icons/io";

const Testimonial = () => {
  const [num , setNum] = useState(0);
  console.log(num);

  return (
    <div className="textimonial">
      <h2>Testimonials</h2>
      <p>See what students are saying about our courses</p>
      <img src="/review.png" alt="" />

      <div className="questions">
        <div className="qus_lf">
          <h3>FAQs</h3>6
          <p>
            Find answers to frequently asked questions about our courses and
            company
          </p>
          <img
            src="https://i.pinimg.com/736x/ce/0e/4f/ce0e4f14da2518e7ab9f076e895c3523.jpg"
            alt=""
          />
        </div>

        <div className="qus_ri">
          {question.map((qus, idx) => {
            return (
              <div className="ques_constiner" key={idx}>
                <div className="ques">
                  <p>{qus.question}</p>
                  <IoMdAdd  onClick={()=>setNum(idx)}/>
                </div>
                {num == idx && <div className="ans">{qus.answer}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
