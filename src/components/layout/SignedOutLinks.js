import React from 'react'

const SignedOutLinks = () => {
return(
  <div>
    <div className="lg:inline-block">
      <a href="/signin" className="block xl:text-xl  mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-6 no-underline">
            Sign In
      </a>
    </div>
    <div className="lg:inline-block">
          <a href="/signup"
            className="inline-block text-sm xl:text-xl px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0 no-underline">Sign Up</a>
    </div>
  </div>
)
}

export default SignedOutLinks