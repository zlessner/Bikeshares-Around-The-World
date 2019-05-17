import React, { Component } from 'react';
import Content from './Content'
import Search from './Search'
import Favorites from './Favorites'

import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import './App.css';

class App extends Component {

  render() {
    return(
      <div>
      <Router>
        <div>
          <nav>
            <Link to="/"><h1>Bikeshares Around the World</h1></Link>
             {/* <Link to="/favorites">Favorite Cities</Link>  */}
             
            <a href="http://api.citybik.es/v2/" target="_blank" className="documentation">CityBikes API Documentation</a>
          </nav>
          <main>
            <Switch>
         <Route exact path ="/" render={(routerProps) => <Content {...routerProps}/>} />
         <Route exact path ="/:id" component={Search} />
         {/* <Route exact path ="/favorites" render={(routerProps) => <Favorites {...routerProps}/>} /> */}
         </Switch>
          </main>
        </div>
      </Router>



</div>

    )
  
    }
}

export default App;


