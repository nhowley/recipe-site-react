// Equivalent to ProjectList in Marioplan

import React from 'react'
import RecipeSummary from './RecipeSummary'
import { Link } from 'react-router-dom'

const RecipeList = ({recipes}) => {
return (
  <div className="container flex justify-around">
    {recipes && recipes.map(recipe => {
      return (
        <Link to={'/recipe/' + recipe.id}>
          <RecipeSummary recipe={recipe} key={recipe.id} />
        </Link>
      )
    })}
  </div>
)
}

export default RecipeList