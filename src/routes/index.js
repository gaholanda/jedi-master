import { lazy } from "react";

const routes = [
  {
    id: "home",
    exact: true,
    path: `${process.env.PUBLIC_URL}/`,
    component: lazy(() => import("./_Home")),
  },
  {
    id: "master",
    exact: true,
    path: `${process.env.PUBLIC_URL}/master`,
    component: lazy(() => import("./_Master")),
  },
];

export default routes;
