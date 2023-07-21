import axios from "axios";

const newRequest = axios.create({
  baseURL: "http://onlyskills-server.onrender.com/api/",
  withCredentials: true,
});

export default newRequest;

