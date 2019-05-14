import React, { Component } from 'react';
import axios from 'axios'

class Content extends Component {


    saveTranslation () {
        axios.post('https://react-translator-api-zl.herokuapp.com/api/translations', {
        })
        .then(() => {
          this.props.history.push('/')
        })
        .catch((err) => {
          console.log(err)
        })
      }
    


    render() {
        return (
            <div>
                <h1>hello</h1>
                <p></p>
            </div>
        );
    }
}

export default Content;