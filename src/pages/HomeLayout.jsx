import React from 'react'
import { Link, Outlet, useNavigation } from 'react-router-dom'
import NavBar from '../components/NavBar'

const HomeLayout = () => {
  const navigate = useNavigation()
  const isLoading = navigate.state === 'loading'
  return (
    <>
      <NavBar />
      <section className='page'>
        {isLoading ? <div className='loading' /> : <Outlet />}
      </section>
    </>
  )
}

export default HomeLayout
