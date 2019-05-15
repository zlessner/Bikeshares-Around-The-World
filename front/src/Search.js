import React, { Component } from 'react';
import axios from 'axios'
import {Route, Link, Switch, Redirect} from 'react-router-dom'

class Search extends Component {

constructor() {
    super()

    this.state = {
        capital: [],
        oink:''
    }

    this.searchCity = this.searchCity.bind(this);
    
}

searchCity(evt) {
this.setState({oink: evt.target.value})
}


componentDidMount () {
    fetch(`http://api.citybik.es/v2/networks/norisbike-nurnberg`)
    .then(res => res.json())
    .then(json => {
        console.log(json)
        this.setState({capital: json.network.stations})
    })

}

render() {

let listOfBikes = this.state.capital.map(outcome => {
    return (
        <div className="bikeSearch">
      <h1> <Link to={"/search"}> {outcome.name} </Link></h1>
      <p>{outcome.empty_slots}</p>
      </div>
    )
    })

  return (
    <div>

      <div className="searchBox">
  <input 
    type="text"
     placeholder="Search City"
     onChange={this.searchCity}
     />
   <button type="submit">Search</button>
</div>
      <div className='container'> {listOfBikes}</div>

    </div>
    
    
  )

}
}

export default Search;