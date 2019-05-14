import React, { Component } from 'react';
import axios from 'axios'
import {Route, Link, Switch, Redirect} from 'react-router-dom'

class Content extends Component {

	constructor() {
		super()

		this.state = {
			capital: []
		}

    }
    

    componentDidMount () {
		fetch(`http://api.citybik.es/v2/networks`)
		.then(res => res.json())
		.then(json => {
			console.log(json)
            this.setState({capital: json.networks})
            //console.log("before", this.state.capital)
		})
	
    }

 render() {


    //console.log("after", this.state.capital)
    const capital = this.state.capital.length > 0 ? <p>{this.state.capital[0].name}</p> : null
    return (
        <div>
    
        <h1>hi</h1>
            
          {capital}
            
        </div>
    );
}
}

export default Content;