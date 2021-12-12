import React from 'react'
import LandingHeader from './LandingHeader';
import Main from '../main_components/Main';
import LandingFooter from './LandingFooter';

// landing page container component
function LandingPage() {
    return (
        <>
            <LandingHeader />
            <Main />
            <LandingFooter />
        </>
    )
}

export default LandingPage
