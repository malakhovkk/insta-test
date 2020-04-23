import React from 'react';
import './App.css';
import {
  Switch,
  Route,
  Link,
  Redirect,
  BrowserRouter,
  useHistory,
  useLocation
} from "react-router-dom";

import Registration from "./Registration"
import Login from "./Login"
import Start from "./Start"
import NoMatch from "./NoMatch"
import FindBlogger from "./FindBlogger"

function App() {
  return (
    <BrowserRouter>
    <Switch>
     <Route exact path="/registration" component={Registration} />
     <Route exact path="/login" component={Login} />
     <Route exact path="/" component={Start} />
     <Route exact path="/FindBlogger" component={FindBlogger} />
     <Route exact path="*" component={NoMatch} />
   </Switch>
   </BrowserRouter>
  );
}

export default App;
