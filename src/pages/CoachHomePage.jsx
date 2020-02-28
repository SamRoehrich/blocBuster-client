import React, { useState } from 'react'
import styled from 'styled-components'

const CoachPageContainer = styled.div`
    display: flex;
    width: 100vw;
    min-height: 100vh;
`
const SideBar = styled.div`
    width: 10vw;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`

const SideBarLink = styled.button`
    height: 10vh;
    width: 100%;
    background-color: blueviolet;
    color: papayawhip;
    cursor: pointer;
`

function CoachHomePage() {

    return (
        //side bar
        //buttons for teams, athletes, workouts, stats
        //each view is loaded from the active sidebar button
        //landing page will have schedule where you can assign 
        //workouts on any given day for any given team
        //view all assigned workouts as well
        <CoachPageContainer>
            <SideBar>
                <SideBarLink>
                    Home
                </SideBarLink>

                <SideBarLink>
                    Manage Teams
                </SideBarLink>

                <SideBarLink>
                    Manage Athletes
                </SideBarLink>

                <SideBarLink>
                    Workout Library
                </SideBarLink>

                <SideBarLink>
                    Resources
                </SideBarLink>
            </SideBar>
        </CoachPageContainer>
    )
} 

export default CoachHomePage