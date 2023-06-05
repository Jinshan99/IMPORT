import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'
import logo from '../../assets/logo.png'
import Import from '../../assets/import.png'
// BEM -> Block Element Modifier
const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#about">About</a></p>
    <p><a href="#career">Career</a></p>
    <p><a href="#research">Research</a></p>
    <p><a href="#course">Courses</a></p>
    <p><a href="#news">News</a></p>
  </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className='gpt__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          {/* <img src={logo} alt="logo" /> */}
          <img src={Import} alt="import" />
        </div>
        <div className='gpt3__navbar-links_container'>
          {/* can reuse following links with Menu function */}
          {/* <p><a href="#home">Home</a></p>
          <p><a href="#career">Career</a></p>
          <p><a href="#research">Research</a></p>
          <p><a href="#course">Courses</a></p>
          <p><a href="#news">News</a></p> */}
          < Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="rgb(0, 0, 0)" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="rgb(0, 0, 0)" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu />
              <div className='gpt3__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
