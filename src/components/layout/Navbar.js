import React from 'react'
import '../../index.css';
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
  const { auth } = props;
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
return(
  <nav className="flex items-center justify-between flex-wrap bg-teal p-6 lg:mt-0">
    <div className="block lg:hidden">
      <button
        className="flex items-center px-3 py-2 border rounded text-white hover:text-white hover:border-white">
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div className="w-full hidden lg:block flex-grow lg:flex lg:items-center lg:w-auto relative flex">
      <div className="text-sm lg:flex-grow">
        <a href="/recipes" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-6 no-underline">
          Recipes
        </a>
        <a href="/shopping-list" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-6 no-underline">
          Shopping List
        </a>
        <a href="/meal-planner" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-6 no-underline">
          Meal Planner
        </a>
        <a href="/macros" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-6 no-underline">
          Calculate your macros
        </a>
      </div>
      <div className="absolute inline-block transform-translate-above lg:logo-transform-translate text-teal bg-white p-8 z-50">
        <a href="/"><p className="text-2xl">Logo</p></a>
      </div>
      { links } 
    </div>
  </nav>
)
}

const mapStateToProps = (state) => {
  console.log(state)
  return{
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Navbar)