import React, { Component } from 'react';
import Content from './Content'
import Search from './Search'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      woof: []
    }


  }

  render() {
    console.log(this.state.data)
    return(
      <div>
      <Router>
        <div>
          <nav>
            <Link to="/"><h1>Bike Shares Across the World</h1></Link>
            {/* <Link to="/search:id">Search </Link> 
            <Link to="/saved-searches">Saved Searches</Link> */}
            <a href="http://api.citybik.es/v2/" target="_blank" className="documentation">CityBikes API Documentation</a>
          </nav>
          <main>
            <Switch>
         <Route exact path ="/" render={(routerProps) => <Content {...routerProps}/>} />
         <Route exact path ="/search/:id" component={Search} />
         </Switch>
          </main>
        </div>
      </Router>



</div>

    )
  
    }
}

export default App;
