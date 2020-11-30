import { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Loading } from "./components";
import routes from "./routes";
import store from "./redux/store";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Provider store={store}>
          <div className="app">
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
        </Provider>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
