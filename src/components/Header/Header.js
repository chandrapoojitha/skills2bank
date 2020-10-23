import React, { useState } from "react"
import styled from "styled-components"
import HeaderLinks from "./HeaderLinks"
import Logo from "../Logo/Logo"
import './Header.css'


const NavigationHeader = styled.nav`
  height: 100px;
  width:100%;
  display: flex;
  background-color: #fff;
  position: fixed;
  top:0;
  justify-content: space-between;
  font-weight:600;
  border-bottom: 2px solid #33333320;
  margin: 0 auto;
  align-self: center;

  @media (max-width: 900px) {
    position: fixed;
    height:68px;
    background:#fff;
    top: 56;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggleheader = styled.div`
  display: none;
  height: 100px;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 900px) {
    display: flex;
  }
`

const Headerbox = styled.div`
  display: flex;
  font-size:14px;
  margin-right:11%;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 6vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top:56px;
    overflow-y:scroll;
    left: ${props => (props.open ? "-100%" : "0")};
  }
  @media (max-width:1024px){
    margin-right:40px;
  }
`

const Hamburgermenu = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  margin-top:-30px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {

    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`
const Header = () => {
   const [headerOpen, setHeaderOpen] = useState(false)


  return (
    
    <NavigationHeader>
      <Logo />
      <Toggleheader
        headerOpen={headerOpen}
        onClick={() => setHeaderOpen(!headerOpen)}
      >
        {headerOpen ? <Hamburgermenu open /> : <Hamburgermenu />}
      </Toggleheader>
      {headerOpen ? (
        <Headerbox>
          <HeaderLinks />
        </Headerbox>
      ) : (
        <Headerbox open>
          <HeaderLinks />
        </Headerbox>
      )}

    </NavigationHeader>
  )
}

export default Header