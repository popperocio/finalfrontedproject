import React from 'react'
import './Logo.css'
import logo from "../../assets/Logo/logo.png"

export const Logo = () => {
    return (
        <div className='LogoContainer'>
            <img src={logo} alt="Logo" data-testid="logo"/>
            <h1>Hotel Finder</h1>
        </div>
    )
}

