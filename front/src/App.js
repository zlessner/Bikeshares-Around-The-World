import React, { Component } from 'react';
import Content from './Content'
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
      data: []
    }
  }

  render() {
    return(
      <Router>
        <div>
          <nav>
            <Link to="/"><h1>Bike Shares Across the World</h1></Link>
            <Link to="/search">Search</Link>
            <Link to="/saved-searches">Saved Searches</Link>
          </nav>
          <main>
          <Route exact path ="/" render={(routerProps) => <Content {...routerProps}/>} />
          </main>
        </div>
      </Router>
    )
  
    }
}

export default App;
