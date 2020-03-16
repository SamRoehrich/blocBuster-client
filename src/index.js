import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import { ApolloLink, from, concat } from 'apollo-link'

const httpLink = createHttpLink({
    uri: 'http://localhost:4000',
    credentials: 'same-origin'
})

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: `Bearer ${localStorage.getItem('token')}` || null,
    }
  }));

  return forward(operation);
})

const cache = new InMemoryCache()
const client = new ApolloClient({
    link: concat(authMiddleware, httpLink),
    cache,
})

const data = {
    team: '',
    athletes: [],
    coaches: [],
    currentUser: '',
    workouts: []
}

cache.writeData({ data })


ReactDOM.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>    
    </BrowserRouter>
, document.getElementById('root'))