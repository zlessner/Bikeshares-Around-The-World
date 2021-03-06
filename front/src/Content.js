//create sorting function to alphabetize results 

import React, { Component } from 'react';
import axios from 'axios'
import Favorites from './Favorites'
import {Route, Link, Switch, Redirect} from 'react-router-dom'

class Content extends Component {

	constructor() {
		super()

		this.state = {
            capital: [],
            oink:'',
            buttonText: 'Add to favorite cities'
        }

        this.searchCity = this.searchCity.bind(this);
        this.addCity = this.addCity.bind(this);
    }

    

  searchCity(evt) {
    this.setState({oink: evt.target.value})
  }

  addCity = () => {
    this.setState({
      buttonText: 'Added to favorite cities'
    });
  }


    componentDidMount () {
		fetch(`http://api.citybik.es/v2/networks`)
		.then(res => res.json())
		.then(json => {
      console.log(json)
            this.setState({capital: json.networks})
		})
	
    }

 render() {

    let searchCity = this.state.capital.filter(obj => obj.location.city.toString().toLowerCase().includes(this.state.oink.toString().toLowerCase())
    || obj.name.toString().toLowerCase().includes(this.state.oink.toString().toLowerCase()))

    let listOfBikes = searchCity.map(outcome => {
        return (
            <div className="bikeSearch">
          <h1> <Link to={outcome.id}> {outcome.location.city} </Link></h1>
          <p>{outcome.name}</p>
          {/* <button className='addFaves' onClick={this.addCity}> {this.state.buttonText} </button> */}
          </div>
        )
        })

      return (
        <div>

          <div className="searchBox">
      <input 
        type="text"
         placeholder="Search City or Bikeshare"
         onChange={this.searchCity}
         />
    </div>
          <div className='container'> {listOfBikes}</div>

        </div>
        
        
      )

}
}

export default Content;


