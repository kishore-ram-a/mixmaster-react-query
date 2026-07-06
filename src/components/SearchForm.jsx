import React from 'react'
import Wrapper from '../assets/wrappers/SearchForm'
import { Form, useNavigation } from 'react-router-dom'
const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Wrapper>
      <form action='' className='form'>
        <input
          type='search'
          name='search'
          className='form-input'
          defaultValue={searchTerm}
        />
        <button
          className='search'
          type='submit'
          className='btn'
          disabled={isSubmitting}
        >
          {isSubmitting ? 'searching...' : 'search'}
        </button>
      </form>
    </Wrapper>
  )
}

export default SearchForm
