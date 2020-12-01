import axios from "axios";

const API = axios.create({
  baseURL: "//swapi.dev/api",
});

const GetLightSideMaster = () => API.get("/people/1/").then((res) => res);

const GetDarkSideMaster = () => API.get("/people/4/").then((res) => res);

export { GetLightSideMaster, GetDarkSideMaster };
