import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import './Navbar.css'

const NavItem = styled(Link)`
  text-decoration: none;
  color: white;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  font-family: brandon-grotesque;
  font-size: 21.5px;
    opacity: 0.9;
    font-weight: 600;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: "";
    height: 1px;
    transition: all 0.4s ease-in;
    opacity:0.9;
  }


  @media (max-width: 900px) {
    padding: 10px 0;
    font-size: 14px;
    z-index: 6;
    color:#002743;
  }
  @media (max-width:1200px){
    margin:0 7px;
  }
`

const NavbarLinks = () => {
  
  return (
    <>
      <NavItem to="/">Home</NavItem>
      <NavItem onClick="window.location='#employee'" >Employers</NavItem>
      <NavItem onClick="window.location='#employability'" >Employability Providers</NavItem>
      <NavItem onClick="window.location='#aboutus'" >About Us</NavItem>
      <NavItem onClick="window.location='#contact'" >Contact Us</NavItem>
      
    </>
  )
}

export default NavbarLinks