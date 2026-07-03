import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Wrapper from '../assets/wrappers/Navbar'
const NavBar = () => {
  return (
    <Wrapper>
      <nav>
        <div className='nav-center'>
          <span className='logo'>Jimmy Tails</span>
          <div className='nav-links'>
            <NavLink to='/' className='nav-link'>
              Home
            </NavLink>
            <NavLink to='/About' className='nav-link'>
              About
            </NavLink>
            <NavLink to='/NewsLetter' className='nav-link'>
              NewsLetter
            </NavLink>
          </div>
        </div>
      </nav>
    </Wrapper>
  )
}
export default NavBar
