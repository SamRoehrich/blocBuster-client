import React from 'react'
import './App.css' 

import Header from './components/Header'

import HomePage from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'

import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/login' component={Login} />
    </Switch>
    </>
  )
}

export default App
