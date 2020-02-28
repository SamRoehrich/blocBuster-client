import React from 'react'

import styled from 'styled-components'
import CoachHomePage from './CoachHomePage'

const HomePageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: black;
`;

function HomePage() {

    return (
        <>
        <HomePageContainer>
           <CoachHomePage />

        </HomePageContainer>
        </>
    )
}

export default HomePage