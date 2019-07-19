import React from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
return(
  <div>
    <div className="lg:inline-block">
      <p onClick={props.signOut} className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-6 no-underline">
              Sign out
      </p>
    </div>
    <div className="lg:inline-block">
          <a href="/myaccount"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0 no-underline">My Account</a>
    </div>
  </div>
)
}

const mapDispatchToProps = (dispatch) => {
  return{
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)