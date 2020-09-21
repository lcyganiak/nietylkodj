import axios from 'axios'

const url = 'https://api.nietylkodj.pl/api/'

const reference = () => {
  return axios.get(`${url}reference/read.php/`)
}
const logo20 = () => {
  return axios.get(`${url}loga20/read.php`)
}
const logoAll = () => {
  return axios.get(`${url}logaAll/read.php`)
}
// http://api.nietylkodj.pl/api/logaAll/read.php
// http://api.nietylkodj.pl/api/loga20/read.php
export default {
  reference,
  logo20,
  logoAll,
}
