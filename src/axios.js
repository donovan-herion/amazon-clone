import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/amaclone-673b4/us-central1/api",
});

export default instance;
