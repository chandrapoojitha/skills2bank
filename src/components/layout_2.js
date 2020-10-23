import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header/Header"
import Footer from './Footer/Footer'
import "./layout.css"

const Layouttwo= ({ children }) => {
  const data_1 = useStaticQuery(graphql`
    query SiteTitleQuery_1 {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data_1.site.siteMetadata?.title || `Title`} />
      
        <main>{children}</main>
      <Footer />
      
    </>
  )
}

Layouttwo.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layouttwo
