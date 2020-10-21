import React from "react"
import styled from "styled-components"
import s2blogo from "../../assets/s2blogo.svg" 

const LogoImg = styled.div`
  margin-left:6%;
  padding-top:22px;
  font-family: brandon-grotesque;
  font-weight:500;
  font-style: normal;

  @media screen and (max-width:900px){
    padding-top:15px;
  }
`
const Logo = () => {
  return (
    <>
    <LogoImg><img src={s2blogo} alt="s2blogo" style={{width:210,height:50}}/></LogoImg>
    </>
  )
}
export default Logo