import React from 'react'
import Wrapper from '../assets/wrappers/ErrorPage'
import { Link, useRouteError } from 'react-router-dom'
import img from '../assets/not-found.svg'

const Error = () => {
  const error = useRouteError()

  // 1. Handle 404 Not Found specifically
  if (error?.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt='not found' />{' '}
          {/* Fixed: Passing variable instead of string */}
          <h3>Page Not Found</h3>
          <p>We can't seem to find the page you're looking for</p>
          <Link to='/'>Back Home</Link>
        </div>
      </Wrapper>
    )
  }

  // 2. Fallback Return: Handles 500 errors, code crashes, etc.
  return (
    <Wrapper>
      <div>
        <h3>Something went wrong</h3>
        <p>There was an unexpected application error.</p>
        <Link to='/'>Back Home</Link>
      </div>
    </Wrapper>
  )
}

export default Error
