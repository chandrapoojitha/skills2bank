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
  font-family: brandon-grotesque;
  font-weight:500;
  font-size: 24px;

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
      <HeaderItem  to="/">Home</HeaderItem>
      <HeaderItem to="#employee">Employers</HeaderItem>
      <HeaderItem to="#employability">Employability Providers</HeaderItem>
      <HeaderItem to="#aboutus">About Us</HeaderItem>
      <HeaderItem to="#contact">Contact Us</HeaderItem>
      
    </>
  )
}

export default HeaderLinks