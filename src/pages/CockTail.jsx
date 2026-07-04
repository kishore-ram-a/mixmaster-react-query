import React from 'react'
import { useLoaderData, Link } from 'react-router-dom'
import axios from 'axios'
import Wrapper from '../assets/wrappers/CocktailPage'
const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
export const loader = async ({ params }) => {
  const { id } = params
  const result = await axios.get(`${singleCocktailUrl}${id}`)
  return { data: result.data, id }
}
const CockTail = () => {
  const { data, id } = useLoaderData()
  const singleDrink = data.drinks[0]
  const ingredients = Object.keys(singleDrink)
    .filter(
      (item) => item.startsWith('strIngredient') && singleDrink[item] !== null,
    )
    .map((item) => singleDrink[item])
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
    strI,
  } = singleDrink
  return (
    <Wrapper>
      <header>
        <Link to='/' className='btn'>
          Home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className='drink'>
        <img src={image} alt={name} className='img' />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>Category:</span>
            {category}
          </p>
          <p>
            <span className='drink-data'>Info:</span>
            {info}
          </p>
          <p>
            <span className='drink-data'>Glass:</span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>Instructions:</span>
            {instructions}
          </p>
          <p>
            <span className='drink-data'>Ingredients:</span>
            {ingredients.map((item, index) => {
              return (
                <span className='ing' key={item}>
                  {item}
                  {index < ingredients.length - 1 ? ',' : ''}
                </span>
              )
            })}
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

export default CockTail
