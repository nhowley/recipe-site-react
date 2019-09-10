import React, { Component } from 'react'
import RecipeList from '../recipes/RecipeList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
  render() {
    console.log(this.props)
    const { recipes } = this.props;
    return (
             
      <div className="flex flex-col py-6 px-10">
          {/* Top bar */}
          <div className="flex mb-4">
            <div className="flex w-1/5">
              <p className="mr-4">My recipes</p>
              <p className="mr-4 font-bold">All recipes</p>
              <div>
                <img src="/img/like.png" width="24px" alt="like"/>
              </div>
            </div>
            <div className="flex w-3/5">
              <div className="ml-10 bg-gray-300 py-2 px-5">
                <p>BROWSE</p>
              </div>
              <div className="flex justify-between">
                <div className="h-10 text-gray-400 py-2 px-4">
                  <p>Find a recipe</p>
                </div>
                <div className="bg-teal h-10 py-1 px-3 flex justify-center ">
                  <div>
                    <img src="/img/search-white.png" width="24px" className="mt-1" alt="search"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-1/5  justify-end">
              <button className="bg-purple text-white px-3 flex">
                <p>Add Recipe</p>
                <img src="/img/add-white.png" width="16px" className="ml-3 mt-1" alt="add"/>
              </button>
            </div>
        </div>
        {/* Recipes and filters */}
        <div className="flex mt-5">
          <div className="lg:w-1/6 h-12">
            <p className="text-2xl">Filters</p>
          </div>
          <div className="w-full lg:w-5/6 h-12">
            <RecipeList recipes={recipes}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return{
    recipes: state.firestore.ordered.recipes,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'recipes' }
  ])
)(Dashboard)