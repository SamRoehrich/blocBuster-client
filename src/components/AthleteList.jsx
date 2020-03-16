import React, { useState } from 'react'
import styled from 'styled-components'
import { useQuery } from 'react-apollo'
import gql from 'graphql-tag'

import AthleteListItem from './AthleteListItem.jsx'

const List = styled.ul`
    background-color: white;
    color: black;
    width: 100%;
    min-height: 100vh;
`

const GET_ATHLETES = gql`
    query GetAthletes {
        getAthletes {
            fullName
            subTeam {
                subTeamName
            }
        }
    }
`

function AthleteList() {

    const { loading, error, data } = useQuery(GET_ATHLETES)

    if(loading) return <h1>Loading</h1>
    if(error) return <h1>Error</h1>


    return (
        <List>
            {
                data.getAthletes.map(athlete => (
                    <AthleteListItem key={athlete.id} athlete={athlete} />
                ))
            }
        </List>
    )
}

export default AthleteList