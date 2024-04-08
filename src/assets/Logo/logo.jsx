import React from 'react'
import './Logo.css'

export const Logo = () => {
    return (
        <div className='LogoContainer'>
            <img src="./logo.png" alt="Logo" data-testid="logo"/>
            <h1>Hotel Finder</h1>
        </div>
    )
}

