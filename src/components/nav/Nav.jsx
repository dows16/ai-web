import React from 'react';
//Below I imported the CSS file with all the styles for this part of the website.
import nav from 'nav.css'
//Below I imported all the react-icons I need for my nav bar.
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi';
//useState is a Hook that allows you to have state (numbers that change/things that change) in functional parts/pieces.
import {useState} from 'react';

const Nav = () => {
  const[activeNav, setActiveNav] =useState('#')
  //This is for rendering the nav section of my site.
  return (
    <nav>
      {/* Below I made anchor tags that had the functions "onClick", "setActiveNav", and "activeNav". When you click the icon on the nav bar it sets the ID thats passed in the "setActiveNav" function to selected and takes you to the that section of the website since I gave each sections of the website unique ID's then it sets that section of the website to "activeNav" making it so that icon of the nav bar is selected and its shows you which section of the site you're on. */}
      {/*<a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><AiOutlineHome /></a>*/}
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><AiOutlineUser /></a>
      <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "active" : ""}><RiServiceLine /></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav;