import React from 'react'
//import styled components
import { StyledTitle, StyledSubTitle, Avatar, StyledButton, ButtonGroup } from '../components/Styles'
import Logo from '../assets/Logo.png'

const Homepage = () => {
  return (
    <div>
        <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "transparent",
            width: "100%",
            padding: "15px",
            display: "flex",
            justifyContent: "flex-start"
        }}>
            <Avatar image={Logo}/>
        </div>
        <StyledTitle size={65}>Welcome To PEPPU VENTURES</StyledTitle>
        <StyledSubTitle size={27}>EXPLORE AND LEARN MORE ABOUT US</StyledSubTitle>
        <ButtonGroup>
            <StyledButton to='/login'>Login</StyledButton>
            <StyledButton to='/signup'>Sign-Up</StyledButton>
        </ButtonGroup>
    </div>
  )
}

export default Homepage