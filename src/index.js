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
import { AUTH_TOKEN } from './constants'
import { CookiesProvider } from 'react-cookie'


const httpLink = createHttpLink({
    uri: 'http://localhost:4000',
    credentials: 'same-origin'
})

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem(AUTH_TOKEN)
    return {
        ...headers,
        authorization: token ? `Bearer ${token}` : ''
    }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})

ReactDOM.render(
    <CookiesProvider>
        <BrowserRouter>
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>    
        </BrowserRouter>
    </CookiesProvider>
, document.getElementById('root'))