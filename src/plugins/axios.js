import axios from "axios";

const baseUrL = 'http://localhost:8000/'
const instance = axios.create({
  baseURL: baseUrL,
  headers: {
    Accept: 'application/json',
  }
})

export default instance
