import axios from 'axios';

export default axios.create({
  baseURL: 'https://cat-fact.herokuapp.com'
})