import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
const HomeLayout = () => {
  return (
    <>
      <NavBar />
      <section className='page'>
        <Outlet />
      </section>
    </>
  )
}

export default HomeLayout
