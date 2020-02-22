import React from 'react'
import logo from './logo.svg'
import './App.css'

import Header from './components/Header'

import HomePage from './pages/Home'

import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
    </Switch>
    </>
  )
}

export default App
