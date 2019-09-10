import React, { Component } from 'react'

class BodyFatCalc extends Component {
  state = {
  gender:'',
   abdominal:'',
   tricep:'',
   thigh:'',
   suprailiac:'',
   bodyFat:''
  }
  render() {
    return (
      <div>
        <h1 className="text-2xl text-center mt-10 ">Calculate your body fat percentage</h1>
        <div className="flex bg-pink">
          <div className="flex">
            <img src="/img/male.png"/>
            <img src="/img/female.png"/>
          </div>
          <div>
            <input type="number" placeholder="age"/>
          </div>
          <div className="flex flex-col">
            <input type="text"/>
           <input type="text"/>
           <input type="text"/>
           <input type="text"/>
          </div>
          <div>
            <button>Calculate</button>
          </div>
        </div>
      </div>
    )
  }
}

export default BodyFatCalc