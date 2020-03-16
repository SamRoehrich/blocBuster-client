import React from 'react'
import { useState } from 'react'
import { useMutation } from 'react-apollo'
import gql from 'graphql-tag'
import { Link, useHistory } from 'react-router-dom'
import { withRouter } from 'react-router'
import styled from 'styled-components'

const LoginForm = styled.form`
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
    width: 35vw;
    height: 8vh;
    border-radius: 100px;
    border: none;
    font-size: 16px;

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

const LOGIN_COACH = gql`
    mutation loginCoach($email: String!, $password: String!) {
        loginCoach(email: $email, password: $password){
            token
        }
    }
`

function Login() {
    const [loginCoach] = useMutation(LOGIN_COACH, {
        onCompleted(data) {
            localStorage.setItem('token', data.loginCoach.token)
            history.goBack()
        }
    })
    let history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <LoginForm
            onSubmit={
                e => {
                    e.preventDefault();
                    loginCoach(
                        { 
                            variables: {
                                email: email,
                                password: password
                            },
                        }
                    )
                }
            }>
            <FormInput 
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
            />
            <FormInput 
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                placeholder="Enter your password"
            />
            
            <Button type="submit"> Log in </Button>

            <Link to="/signup">Create an account</Link>

        </LoginForm>
    )

}

export default withRouter(Login)