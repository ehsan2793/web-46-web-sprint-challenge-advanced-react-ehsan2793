import axios from 'axios';


export const getplants = () => {
    return axios.get('http://localhost:3333/plants')
           .then((response) => {return  response.data})
  }



