import React, { Component } from 'react';
import {Route, Link, Switch, Redirect} from 'react-router-dom'

class Favorites extends Component {
	constructor() {
		super()

		this.state = {
            capital: [],
            oink:''
        }

        this.searchCity = this.searchCity.bind(this);
        this.addCity = this.addCity.bind(this);
    }

    

  searchCity(evt) {
    this.setState({oink: evt.target.value})
  }

  addCity(evt) {
    this.setState({[evt.target.name]: evt.target.value})
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
          <button className='addFaves'>Add to favorite cities</button>
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
          <div className='container'
          onClick={this.addCity}> {listOfBikes}</div>

        </div>
        
        
      )

}
}

export default Favorites;