import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] h-auto w-full  bg-cover  ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/orange-copy-space-background-with-sale-idea_23-2148305925.jpg?size=626&ext=jpg&ga=GA1.1.1538103849.1664040435&semt=ais)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h2
          className={`text-[35px] leading-[1.3] animate-pop right-0  800px:text-[70px] text-black font-[600] capitalize`}
        >
         Your All-in-One Destination for Seamless  Buying and Selling!!
        </h2>
        
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff]  font-bold font-[Poppins] text-[18px]">
                    Shop Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
