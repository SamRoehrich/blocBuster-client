import React from 'react'

import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const GET_USERS = gql`
{
  users {
    id
    name
  }
}

`

function Users() {
    const { loading, error, data } = useQuery(GET_USERS)

    console.log(data.users)

    

    if(loading) return <p>Loading</p>

    return (
        <h1>{data.users.id} {data.users.fullName, [0]}</h1>
    )
}

export default Users