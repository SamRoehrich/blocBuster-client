import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
 
import styled from 'styled-components'

const SideBar = styled.div`
    width: 10vw;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`

const SideBarLink = styled(Link)`
    height: 18vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background-color: blueviolet;
    color: papayawhip;
    cursor: pointer;
    font-size: 19px;
    font-weight: 500;
`

function Sidebar() {

    return (
        <SideBar>
                <SideBarLink to='/'>
                    Home
                </SideBarLink>

                <SideBarLink>
                    Manage Teams
                </SideBarLink>

                <SideBarLink to='/athletespage'>
                    Manage Athletes
                </SideBarLink>

                <SideBarLink>
                    Workout Library
                </SideBarLink>

                <SideBarLink>
                    Resources
                </SideBarLink>
            </SideBar>
    )
}

export default withRouter(Sidebar)