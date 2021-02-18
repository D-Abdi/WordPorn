
import axios from "axios";

const instance = axios.create({
  baseURL: "https://abdi-wordporn.herokuapp.com",
});

export default instance;