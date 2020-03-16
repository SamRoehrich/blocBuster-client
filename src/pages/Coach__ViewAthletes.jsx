import React, { useState } from 'react'
import styled from 'styled-components'

import Sidebar from '../components/Sidebar'
import AthleteList from '../components/AthleteList'
import EditAthlete from '../components/EditAthlete'

const Container = styled.div`
    width: 90vw;
    height: 100vh;
    display: flex;
`

export default function Coach_ViewAthletes() {

    const [athlete, setAthlete] = useState('')

    return (
        <Container>
            <Sidebar />
            <AthleteList />
            <EditAthlete />
        </Container>
    )
}