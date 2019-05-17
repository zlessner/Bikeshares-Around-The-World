import axios from 'axios'
import {CLIENT_URL} from './constants'

const getRequest =axios.get(CLIENT_URL)
// .then(response => {
//     this.setState({flashcards: response.data})
//   })
.catch(err => {
    console.error(err) })

export {getRequest}