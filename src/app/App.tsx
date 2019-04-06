import React, { FC } from 'react';
import logo from './logo.svg';

import { Router, View, Link } from "./router"

import { Index, About, Article } from "./pages/Index"

export const App: FC = ({ }) => {
  const routes = [{
    path: "/index",
    component: Index
  }, {
    path: "/About",
    component: About
  }, {
    path: "/article",
    component: Article
  }]
  return (
    <Router>
      <div className="App">
        <ul>
          <Link to="/index">Index</Link>
          <Link to="/about">About</Link>
          <Link to="/article">About</Link>
        </ul>
        <View routes={routes} noMatch={About}></View>
      </div>
    </Router>
  )
}
