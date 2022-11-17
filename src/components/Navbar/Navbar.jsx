import React, { useState } from 'react';
import './Navbar.css';
import { MdTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {

  const[active, setActive] = useState('navBar')

  const ShowNav =()=>{
    setActive('navBar activeNavbar')
  }

  const removeNavbar =()=>{
    setActive('navBar')

  }

  return (
    <section className='navBarSection'>
      <header className="header  flex">
        <div className="logoDiv">
        <a href="/" className="logo flex ">
          <h1> <MdTravelExplore  className="icon" /> travel.</h1>
        </a>
        </div>

        <div className={active}>
          <ul className="navlists flex ">
          <li className="navItem">
            <a href="/" className="navLink">home</a>
          </li>

          <li className="navItem">
            <a href="/" className="navLink">pkg</a>
          </li>

          <li className="navItem">
            <a href="/" className="navLink">shop</a>
          </li>

          <li className="navItem">
            <a href="/" className="navLink">about</a>
          </li>

          <li className="navItem">
            <a href="/" className="navLink">pages</a>
          </li>

          <li className="navItem">
            <a href="/" className="navLink">news</a>
          </li>

          <li className="navItem">
            <a href="/" className="navLink">contact</a>
          </li>

          <button className='btn'>
            <a href="/" > Book now</a>
          </button>

          </ul>
          <div onClick={removeNavbar}   className="closeNavbar ">
            <AiFillCloseCircle className="icon"/>
          </div>

        </div>

        <div onClick={ShowNav} className="toggleNavbar">
          <TbGridDots className="icon"/>
        </div>

      </header>
    </section>


  )
}

export default Navbar