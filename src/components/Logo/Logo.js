import React from "react"
import styled from "styled-components"
import s2blogo from "../../assets/s2blogo.webp" 

const LogoImg = styled.div`
  margin-left:9%;
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
    <LogoImg><a href="/"><img src={s2blogo} alt="s2blogo" style={{width:168,height:64}}/></a></LogoImg>
    </>
  )
}
export default Logo