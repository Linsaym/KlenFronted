import axios from "axios";

// const baseUrL = 'http://localhost:8000/' //c локального сервака
const baseUrL = 'http://192.168.0.113:8000/'  //с левиного сервака если вайфай один или впн
const instance = axios.create({
  baseURL: baseUrL,
  headers: {
    Accept: 'application/json',
  }
})

export default instance;
