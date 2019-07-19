// Equivalent to ProjectSummary in Marioplan

import React from 'react'

const RecipeSummary = ({recipe}) => {
  return(
  <div className="max-w-xxs rounded overflow-hidden shadow-lg mx-2">
    <img className="w-full object-fit" src="/img/seafood-risotto.jpg" alt="Seafood Risotto" height="230px"/>
    <div className="flex">
      <div className="flex-grow">
        <div className="inline-block p-1 ml-2">
          <img src="/img/clock.png" alt="clock" width="15px" />
        </div>
        <p className="inline-block text-xs">{recipe.cookingTimeHours}hr {recipe.cookingTimeMinutes}min</p>
      </div>
      <div className="p-1">
        <img src="/img/like.png" alt="like" className="justify-end mr-2" width="14px" />
      </div>
      </div>
      <div className="px-2 py-4">
        <div className="text-2xl mb-1">{recipe.title}</div>
        <br />
        <p className="text-sm mb-2">
          {recipe.description} 
        </p>
        <br />
        <p className="italic text-sm">
          by {recipe.authorFirstName} {recipe.authorLastName}
        </p>
      </div>
  </div>
  )
}

export default RecipeSummary