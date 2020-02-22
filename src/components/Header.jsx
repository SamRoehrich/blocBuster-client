import React from 'react'

import styled from 'styled-components'

const HeaderText = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
`;

function Header() {
    return(
        <HeaderText>Header Text</HeaderText>
    )
}

export default Header