import React from 'react'
import "./Navbar.css"
import { Logo } from '../../../assets/Logo'
import { User } from '../../atoms/User'
import { Cart } from '../../atoms/Cart'
import { CustomDrawer } from '../../molecules/CustomDrawer'

export const Navbar = () => {
  return (
    <div className='NavbarContainer' data-testid="navbar">
        <Logo/>
        <div className='NavUserAndCart'> 
          <Cart/>
          <User/>
        </div>
        <div className='MobileNavMenu'>
          <CustomDrawer/>
        </div>
    </div>
  )
}
