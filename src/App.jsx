import React from 'react'
import './App.css' 

import Header from './components/Header'

import HomePage from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'

import { Route, Switch } from 'react-router-dom'
import Coach_ViewAthletes from './pages/Coach__ViewAthletes'

function App() {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/athletespage' component={Coach_ViewAthletes} />
    </Switch>
    </>
  )
}

export default App
