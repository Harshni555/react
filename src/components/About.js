import React from 'react';
import aboutIcon from "../assets/aboutIcon.jpg";
import cursorIcon from "../assets/cursorIcon.png";
import serverIcon from "../assets/serverIcon.png";

const About = () => {
  return (
    <section className='about__container' id='about'>
        <h2 className='about__title'>About</h2>
    <div className='about__content'>
      <img src={aboutIcon} className='about__img' alt='' />
      <ul className='about__items'>
        <li className='about__item'>
          <img src={cursorIcon} alt='' />
          <div>
            <h3>Front-End Developer</h3>
            <p>"I'm a front-end developer crafting interactive and visually appealing web experiences."</p>
          </div>
        </li>
        <li className='about__item'>
          <img src={serverIcon} alt='' />
          <div>
            <h3>Backend-End Developer</h3>
            <p>"Aspiring backend developer with a passion for building robust and high-performance server-side solutions."</p>
          </div>
        </li>
        <li className='about__item'>
          <img src={cursorIcon} alt='' />
          <div>
            <h3>UI Designer</h3>
            <p>"Passionate UI design fresher, eager to create intuitive and visually appealing user interfaces."</p>
          </div>
        </li>
    </ul>
</div>  
</section>
  );
}

export default About;