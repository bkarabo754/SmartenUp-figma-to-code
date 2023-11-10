import React from "react";
import styles from "../styles";
import Artboard from "../assets/Artboard.png";
import ButtonOne from "../assets/ButtonOne.svg";
import ButtonTwo from "../assets/ButtonTwo.svg";

const HeroSection = () => {
  const word = "EXPLORE";
  return (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 ss:text-[72px] text-[52px] text-white ss:leading-[90.8px] leading-[75px] font-extrabold font-onda-bold uppercase">
            Let your <br className="sm:block hidden" />{" "}
            <span className="text-gradient font-extrabold font-onda-bold">
              Mind
            </span>{" "}
          </h1>
        </div>
        <div className="inline-block items-center">
          {word.split("").map((letter, index) => (
            <span
              key={index}
              className=" text-4xl font-extrabold font-onda-bold lg:text-5xl uppercase leading-tight md:leading-[76.24px] bg-gradient-to-r from-purple-600 via-pink-500 to-purple-900 text-transparent bg-clip-text"
            >
              {letter}
            </span>
          ))}
        </div>
        <span className="text-white text-2xl md:text-4xl lg:text-5xl font-extrabold font-onda-bold uppercase leading-tight md:leading-[76.24px] mt-3">
          {" "}
          new world
        </span>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={Artboard}
          alt="billing"
          className="w-[100%] h-[100%]  z-[5] mix-blend-color-dodge border-none lg:mb-[10%] lg:mr-[100%] object-contain"
        />
      </div>

      <div className="flex flex-column mt-[10px] ml-30 lg:mt-[440px] lg:ml-">
        <img src={ButtonTwo} alt="" className="w-[150px]" />
      </div>
      <div className="flex flex-column mt-[10px] ml-30 lg:mt-[440px] lg:mr-[10px]">
        <img src={ButtonOne} alt="" className="w-[150px]" />
      </div>
    </section>
  );
};

export default HeroSection;
