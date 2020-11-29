import axios from "axios";

const API = axios.create({
  baseURL: "https://swapi.dev/api/people/",
});

const GetYourMaster = () => axios.all([API.get("1"), API.get("4")]);

export { GetYourMaster };
