import React from 'react'

import CoachHomePage from './CoachHomePage'
import LandingPage from './LandingPage'

function HomePage() {

    const user = localStorage.getItem('token')

    if(user) {
        return <CoachHomePage />
    }
    return <LandingPage />
}

export default HomePage