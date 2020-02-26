import React, { useState } from 'react'
import { useMutation } from 'react-apollo'
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

const SIGNUP_COACH = gql`
    mutation signUpCoach($fullName: String!, $email: String!, $password: String!, $teamKey: String!, $coachKey: String!) {
        signUpCoach(fullName: $fullName, email: $email, password: $password, teamKey:  $teamKey, coachKey: $coachKey) {
            token
        }
    }
`

function CoachSignUp() {


    const [ signUpCoach, { data }] = useMutation(SIGNUP_COACH)
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [teamKey, setTeamKey] = useState('')
    const [coachKey, setCoachKey] = useState('')

    return (
        <Form
            onSubmit={ e => {
                e.preventDefault();
                signUpCoach({ variables: {
                    fullName: fullName,
                    email: email,
                    password: password,
                    teamKey: teamKey,
                    coachKey: coachKey
                }})
            }}
            >
        <FormInput 
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            type='text'
            placeholder='Enter full name'
        />

        <FormInput
            value={email}
            onChange={e => setEmail(e.target.value)}
            type='email'
            placeholder='Enter your email'
        />

        <FormInput
            value={password}
            onChange={e => setPassword(e.target.value)}
            type='password'
            placeholder='Enter password'
        />

        <FormInput
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            type='password'
            placeholder='Confirm password'
        />

        <FormInput
            value={teamKey}
            onChange={e => setTeamKey(e.target.value)}
            type='text'
            placeholder='Enter team key(Provided by head coach)'
        />

        <FormInput
            value={coachKey}
            onChange={e => setCoachKey(e.target.value)}
            type='text'
            placeholder='Enter coach key'
        />
        <Button type="submit"> Sign up </Button>
        </Form>
    )
}

export default CoachSignUp