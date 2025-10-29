import React, { useState } from "react";
import "../css/Lfooter.css";
import toast from "react-hot-toast";

const Lfooter = () => {
  const [email, setEmail] = useState("");
  function handleEmail(e) {
    e.preventDefault();
    toast.success("Thanks for connecting with us.");
    setEmail("");
  }

  return (
    <div className="lfooter">
      <div className="upper_fdiv">
        <div className="f_content">
          <h3>Start Your Free Trial and See the Difference !</h3>
          <p>
            Sign up a free and exprience the power of our product for yourself.
          </p>
          <form className="email" onSubmit={handleEmail}>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Your email edress..." required />
            <button
              type="submit"
            >
              Subscribe
            </button>
          </form>
          <p>Weekly newsletter only. No spam,unsubscribe at any time.</p>
        </div>

        <img src="/contact.png" alt="" />
      </div>

      <div className="lf_img"></div>
    </div>
  );
};

export default Lfooter;
