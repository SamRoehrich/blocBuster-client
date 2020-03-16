import React from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag'

import Sidebar from '../components/Sidebar'
import { useQuery } from 'react-apollo'

const CoachPageContainer = styled.div`
    display: flex;
    width: 100vw;
    min-height: 100vh;
`

const MainView = styled.div`
    height: 100vh;
    width: 90vw;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    z-index: 2;
`

const Button = styled.button`
    height: 45vh;
    width: 45vw;
    border-radius: 30px;
    border: 3px solid black;
    font-size: 30px;
    font-weight: 800;
    background-color: black;
    color: white;
    transition: all .2s;

    &:hover {
        font-size: 35px;
        opacity: 70%;
        cursor: pointer;
    }
`

const GET_COACH_DETAILS = gql`
    query GetCoachDetails {
        coachDetails {
            fullName
            team {
                teamName
                id
            }
        }
    }
`

function CoachHomePage() {
    const { loading, error, data } = useQuery(GET_COACH_DETAILS)

    return (
        <CoachPageContainer>
            <Sidebar />
            <MainView> 
                <Button>View Teams</Button>
                <Button>Make a Post</Button>
                <Button>Create a Workout</Button>
                <Button>Update Athlete Stats</Button>   
            </MainView>
        </CoachPageContainer>
    )
} 

export default CoachHomePage