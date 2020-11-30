import axios from "axios";

const API = axios.create({
  baseURL: "https://swapi.dev/api/people/",
});

const GetLightSideMaster = () => API.get("1").then((res) => res);

const GetDarkSideMaster = () => API.get("4").then((res) => res);

export { GetLightSideMaster, GetDarkSideMaster };
