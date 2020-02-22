import React, { useState } from 'react'

import gql from 'graphql-tag'

import AUTH_TOKEN from '../constants'

import styled from 'styled-components'

const LogInContainer = styled.div`
    width: 50vw;
    height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const InputContainer = styled.div`
    height: 60%;
    width: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoginButton = styled.button`
    border-radius: 3px;
    height: 25%;
    width: 50%;
`;

function LoginPage() {

    const ADD_USER = gql`
        mutation signUp{


        }
    `;

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    retrun(
        <LogInContainer>
            <InputContainer>
                <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                type='email'
                placeholder='Enter your email'
                />

                <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                type='password'
                placeholder='Enter Password'
                />
            </InputContainer>

            <LoginButton>
                Login
            </LoginButton>
        </LogInContainer>


    )
}

export default LoginPage