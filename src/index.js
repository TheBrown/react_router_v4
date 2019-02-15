import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter as Router, Route } from "react-router-dom";

import BasicExample from "./BasicExample";
import UrlParameter from './ParamsExample';
import AuthExample from './AuthExample';
import CustomLinkExample from './CustomLinkExample';
import PreventingTransitionExample from './PreventingTransitionsExample';
import NoMatchExample from './NoMatchExample';
import RecursiveExample from './RecursiveExample';
import Sidebar from './SidebarExample';
import AnimationExample from './AnimationExample';
import AmbiguousExample from './AmbiguousExample';
import RouteConfigExample from './RouteConfigExample';
import ModalGallery from './ModalGallery';
import StaticRouter from './StaticRouterExample';

const Routes = () => (
  <Router>
    <div>
      <Route path="/" exact component={App} />
      <Route path="/basic" component={BasicExample} />
      <Route path="/urlparameter" component={UrlParameter} />
      <Route path="/redirects" component={AuthExample} />
      <Route path="/customlink" component={CustomLinkExample}/>
      <Route path="/preventingtransition" component={PreventingTransitionExample}/>
      <Route path="/nomatch" component={NoMatchExample}/>
      <Route path="/recursive" component={RecursiveExample}/>
      <Route path="/sidebar" component={Sidebar}/>
      <Route path="/animation" component={AnimationExample}/>
      <Route path="/ambiguous" component={AmbiguousExample}/>
      <Route path="/routeconfig" component={RouteConfigExample}/>
      <Route path="/modal" component={ModalGallery}/>
      <Route path="/staticrouter" component={StaticRouter}/>
    </div>
  </Router>
);

ReactDOM.render(<Routes />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
