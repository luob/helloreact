import React, { FC, useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import { Index, About, Article } from "./pages/Index"
import { AppHeader } from "./header/AppHeader"
import "./App.css"

export const App: FC = () => {
  return (
    <Router>
      <AppHeader></AppHeader>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={Article} />
    </Router>
  )
}

