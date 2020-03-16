import React, { useState } from 'react'
import { useMutation, useQuery } from 'react-apollo'
import gql from 'graphql-tag'

import styled from 'styled-components'

const Form = styled.form`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

const FormInput = styled.input`
    height: 3vh;
    border-radius: 1px;
    color: black;
    background-color: white;
    width: 25vw;
    height: 8vh;
    border-radius: 100px;
    border: none;

    &:focus{
        outline: none;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    height: 12vh;
    width: 100%;
    justify-content: center;
    align-items: center;
`

const Button = styled.button`
    background-color: blue;
    color: white;
    border: 1px solid black;
    border-radius: 100px;
    height: 10vh;
    width: 10vw;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    padding: 20px;

    &:focus {
        outline: none;
        background-color: white;
        color: blue;
    }
`

//queries
const GET_TEAMS = gql`
    {
        getTeams {
            id
            teamName
            homeGym
            teamKey
            coachKey
        }
    }
`


//mutations
const SIGNUP_USER = gql`
    mutation signUpUser($fullName: String!, $email: String!, $password: String!, $team: String, $userType: String!) {
        signUpUser(fullName: $fullName, email: $email, password: $password, team: $team, userType: $userType) {
            user {
                id
                fullName
                email
                team {
                    teamName
                    headCoach{
                        fullName
                    }
                }
            }
        }
    }
`

function SignUp() {
    const [userType, setUserType] = useState('ATHLETE')
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [teamKey, setTeamKey] = useState('')
    const [team, setTeam] = useState('')
    const [coachKey, setCoachKey] = useState('')
    
    const [signUpUser] = useMutation(SIGNUP_USER)
    const { loading, error, data } = useQuery(GET_TEAMS)
    
    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>Error</h1>
    if(!data) return <h1>No team data found</h1>

    //if provided team key does not equal queried team key, alert 'incorrect team key'
   { 
       (data.getTeams.map(t => (
        t.teamKey === teamKey
    )))}

    return (
        <Form
            onSubmit={ e => {
                e.preventDefault();
                if(password !== confirmPassword) {
                    return alert('Passwords do not match, try again')
                }
                signUpUser({ variables: {
                    fullName,
                    email,
                    password,
                    team,
                    coachKey,
                    teamKey,
                }})
            }}
        >
            <ButtonContainer>
                <Button value='ATHLETE' onClick={e => 
                {
                    e.preventDefault();
                    setUserType(e.target.value)
                    setCoachKey('')
                }}>
                    Athlete
                </Button>

                <Button value='COACH' onClick={e =>
                { 
                    e.preventDefault();
                    setUserType(e.target.value)
                }}>
                    Coach
                </Button>
            </ButtonContainer>

            <FormInput 
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                type='text'
                placeholder='Enter full name'
                required
            />

            <FormInput
                value={email}
                onChange={e => setEmail(e.target.value)}
                type='email'
                placeholder='Enter your email'
                required
            />

            <FormInput
                value={password}
                onChange={e => setPassword(e.target.value)}
                type='password'
                placeholder='Enter password'
                required
            />

            <FormInput
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                type='password'
                placeholder='Confirm password'
                required
            />
            <select required id='teams' value={team} onChange ={e => setTeam(e.target.value)}>
                {
                    data.getTeams.map(team => (
                        <option key={team.id} value={team.id}>{team.teamName}</option>
                    ))
                }
            </select>

            <FormInput 
                value={teamKey}
                onChange={e => setTeamKey(e.target.value)}
                type='text'
                placeholder='Enter Team Key'
                required
            />

           {userType ==='COACH' && <FormInput 
                value={coachKey}
                onChange={e => setCoachKey(e.target.value)}
                type='text'
                placeholder='Enter Coach Key'
                required
            />}

            <Button type="submit"> Sign up </Button>

        </Form>
    )
}

export default SignUp