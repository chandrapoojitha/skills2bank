import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import './Header.css'

const HeaderItem = styled(Link)`
  text-decoration: none;
  color: #002139;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position:relative;
  font: normal normal medium 24px/30px Brandon Grotesque;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: "";
    font-weight:500;
    height: 1px;
    transition: all 0.4s ease-in;
  }


  @media (max-width: 900px) {
    padding: 10px 0;
    font-size: 14px;
    z-index: 6;
    color:#002743;
  }
  @media (max-width:1200px){
    font-size:21px;
    margin:0 7px;
  }
`

const HeaderLinks = () => {
  return (
    <>
      <HeaderItem><a className="headerlinks" href="/" 
      style={{textDecoration:`none`}}>Home</a></HeaderItem>
      <HeaderItem><a className="headerlinks" href="https://www.skills2bank.com/#employee" 
      style={{textDecoration:`none`}}>Employee</a></HeaderItem>
      <HeaderItem><a className="headerlinks" href="https://www.skills2bank.com/#employability" 
      style={{textDecoration:`none`}}>Employability Providers</a></HeaderItem>
      <HeaderItem><a className="headerlinks" href="https://www.skills2bank.com/#aboutus" 
      style={{textDecoration:`none`}}>About Us</a></HeaderItem>
      <HeaderItem><a className="headerlinks" href="https://www.skills2bank.com/#contact" 
      style={{textDecoration:`none`}}>Contact Us</a></HeaderItem>
      
    </>
  )
}

export default HeaderLinks