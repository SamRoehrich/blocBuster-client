import React, { useState } from 'react'
import styled from 'styled-components'


const Item = styled.div`
    width: 100%;
    height: 10vh;
    color: black;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: 2px solid black;
`

const EditButton = styled.button`
    background-color: black;
    height: 15px;
    width: 10px;
    border-radius: 10px;
    border: 1px solid black;
`

function AthleteListItem(props) {

    const subTeamName = props.athlete && props.athlete.subTeam ? props.athlete.subTeam.subTeamName : '';

    return (
        <Item>
            <h1>{props.athlete.fullName}</h1>
            <h1>{subTeamName}</h1>
            <EditButton />
            
        </Item>
    )
}

export default AthleteListItem