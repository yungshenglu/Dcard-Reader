import { BrowserRouter, Route, Switch } from "react-router-dom";
import view from '@V/index';
import { IRoutes } from '@I/routes';
import { routes } from './routes';


const router = routes.map((route: IRoutes<any>) => { 
  return (
    <Route
      path={route.path}
      component={view[route.component]}
      exact={route.exact}
      key={route.path}
    />
  )
});

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>{router}</Switch>
    </BrowserRouter>
  );
};

export default Router;