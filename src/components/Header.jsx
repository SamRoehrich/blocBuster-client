import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { AUTH_TOKEN } from '../constants.js'

import styled from 'styled-components'

const HeaderText = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoginSignUp = styled.div`
    display: flex;
    justify-content: flex-end;
`

const HeaderContainer = styled.div`
    width: 100vw;
    height: 9vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: papayawhip;
`

const HeaderLink = styled(Link)`
    color: violet;
    font-size: 18px;
    justify-self: flex-end;
`


function Header() {

    const authToken = localStorage.getItem(AUTH_TOKEN)
    return(
        <HeaderContainer>
        <HeaderLink to="/">Home</HeaderLink>
            <HeaderText>
                Coaches App
            </HeaderText>
         {
             authToken 
             ?
             <HeaderLink to="/"
                onClick={()=> {
                    localStorage.removeItem(AUTH_TOKEN)
                }}
            > Log out </HeaderLink>
            : 
            <HeaderLink to="login">Log in</HeaderLink>
         }
        </HeaderContainer>
    )
}

export default withRouter(Header)