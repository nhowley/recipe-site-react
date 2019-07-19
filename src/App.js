import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import IndividualRecipe from './components/recipes/IndividualRecipe'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AddRecipe from './components/recipes/AddRecipe';
import Home from './components/Index';
import Footer from './components/layout/Footer';
import Macros from './components/macros/Macros';
import Results from './components/macros/Results';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/recipes" component={Dashboard} />
            <Route path="/recipe/:id" component={IndividualRecipe} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/add" component={AddRecipe} />
            <Route exact path="/macros" component={Macros} />
            <Route path="/macros/:id" component={Results} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
