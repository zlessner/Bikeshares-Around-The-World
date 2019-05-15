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
    console.log(this.props.match.params.id)
    fetch(`http://api.citybik.es/v2/networks/${this.props.match.params.id}`)
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
      <h1> {outcome.name} </h1>
      <p>Empty Slots: {outcome.empty_slots}</p>
      <p>Free Bikes: {outcome.free_bikes}</p>
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
</div>
      <div className='container'> {listOfBikes}</div>

    </div>
    
    
  )

}
}

export default Search;