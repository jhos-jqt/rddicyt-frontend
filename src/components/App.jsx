import React from 'react'
import "../styles/app.scss"
import Navbar from './organisms/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => (
  <Router>
    <Navbar/>
    <Switch>
      <Route path="/" exact component={ Home } />
      <Route path="/login" component={ Login } />
      <Route component={ NotFound } />
    </Switch>
  </Router>
)

export default App;
