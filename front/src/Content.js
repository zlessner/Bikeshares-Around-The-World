import React, { Component } from 'react';
import axios from 'axios'
import {Route, Link, Switch, Redirect} from 'react-router-dom'

class Content extends Component {

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
		fetch(`http://api.citybik.es/v2/networks`)
		.then(res => res.json())
		.then(json => {
			console.log(json)
            this.setState({capital: json.networks})
		})
	
    }

 render() {

    let list = this.state.capital.map(item => {
        return (
            
          <div className="bicycles">
          <h1>{item.location.city}</h1>
          <p>{item.name}</p>  
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

          {list}
        </div>
      )

}
}

export default Content;


