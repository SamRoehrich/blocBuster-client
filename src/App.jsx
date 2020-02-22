import React from 'react'
import './App.css'

import Header from './components/Header'

import HomePage from './pages/Home'
//import LoginPage from './pages/LoginPage'

import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/login' component={LoginPage} />
    </Switch>
    </>
  )
}

export default App
