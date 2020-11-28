import { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Loading } from "./components";
import routes from "./routes";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <div className="container">
          <Switch>
            {routes.map((route) => (
              <Route
                key={route.id}
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
