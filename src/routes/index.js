import { lazy } from "react";

const routes = [
  {
    id: "home",
    exact: true,
    path: "/",
    component: lazy(() => import("./_Home")),
  },
  {
    id: "master",
    exact: true,
    path: "/master",
    component: lazy(() => import("./_Master")),
  },
];

export default routes;
