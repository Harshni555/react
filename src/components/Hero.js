import React from 'react';
import hero from "../assets/heroImg.jpg";

const Hero = () => {
  return (
    <section className='hero__container'>
    <div className='hero__content'>
        <h1 className='hero__title'>Hi, I'm Harshini</h1>
        <p className='hero__description'> I'm  Front-end developer bringing interactivity and 
        creativity to every user interface.<br></br>
        Reach out if you'd like to know more..
        </p>
        <a href='mailto:harshini.gangula12@gmail.com' className='hero__contactBtn'>Contact Me</a>
    </div>
    <img src={hero} className="hero__img" alt="" />
    <div  className="hero__topBlur"></div>
    <div className='hero__bottomBlur'></div>
    </section>
  );
}

export default Hero;