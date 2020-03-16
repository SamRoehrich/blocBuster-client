import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

import styled from 'styled-components'

const HeaderText = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
`;

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
    const authToken = localStorage.getItem('token')
    return(
        <HeaderContainer>
        <HeaderLink to="/">Home</HeaderLink>
            <HeaderText>
                Coaches App
            </HeaderText>
         {
            authToken ? (
                <HeaderLink to="/" onClick={()=> {localStorage.removeItem('token')}}>
                    Log out 
                </HeaderLink>
                )
            : 
            <HeaderLink to="login">Log in</HeaderLink>
         }
        </HeaderContainer>
    )
}

export default withRouter(Header)