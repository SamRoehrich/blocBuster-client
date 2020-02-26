import React, { useState } from 'react'

import styled from 'styled-components'

import AthleteSignUp from '../components/athleteSignUp'
import CoachSignUp from '../components/coachSignUp'

const SignUPContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-items: space-between;   
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

function SignUp() {

    const [userType, setUserType] = useState('athlete')

    return (
        <SignUPContainer>
            <CoachSignUp />
        </SignUPContainer>
    )
}

export default SignUp