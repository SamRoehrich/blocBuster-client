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

const SIGNUP_USER = gql`
    mutation signUpUser($fullName: String!, $email: String!, $password: String!, $teamKey: String, $phoneNumber: String!) {
        signUpUser(fullName: $fullName, email: $email, password: $password, teamKey: $teamKey, phoneNumber: $phoneNumber) {
            user
        }
    }
`

function SignUp() {


    const [ signUpUser, { data }] = useMutation(SIGNUP_USER)
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [teamKey, setTeamKey] = useState('')

    return (
        <Form
            onSubmit={ e => {
                e.preventDefault();
                signUpUser({ variables: {
                    fullName: fullName,
                    email: email,
                    password: password,
                    teamKey: teamKey
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
            placeholder='Enter Team Key if one is provided'
        />
        <Button type="submit"> Sign up </Button>
        </Form>
    )
}

export default SignUp