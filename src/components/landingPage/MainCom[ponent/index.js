import React from "react";
import iphone from "../../../assets/iphone.png"
import { Link } from "react-router-dom";
import gradient from "../../../assets/gradient.webp";
import "./style.css";
import Button from "../../common/Button";
import { motion } from "framer-motion";

// doc to learn =>https://www.npmjs.com/package/framer-motion
const MainComponent = () => {
  function onClick(){

  }
  return (
    <div className="flex-component">
      <div className="left-component">
        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
          }}
          className="track-crypto"
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1,
          }}
          className="real-time"
        >
          Real Time
        </motion.h1>
        <motion.p
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
          }}
          className="info-text"
        >
          Track crypto through a public api in real time. visit dashboard to do
          so !
        </motion.p>
        <div className="btn-flex">
         <Link to="/dashboard"> <Button onclick={onClick} text={"Dashboard"} /></Link>
          <Button onclick={onClick} text={"Share"} outlined={true} />
        </div>
      </div>
      <div className="right-container">
        <motion.img
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "nirror",
            duration: 2,
            repeat: Infinity,
          }}
          className="iphone"
          src={iphone}
        />

        <img className="gradient" src={gradient} />
      </div>
    </div>
  );
};

export default MainComponent;
