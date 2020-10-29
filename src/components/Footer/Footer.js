import React from 'react'
import s2blogowhite from '../../assets/s2blogowhite.svg'
import locationonwhite from '../../assets/locationonwhite.svg'
import phonewhite from '../../assets/phonewhite.svg'
import sendwhite from '../../assets/sendwhite.svg'
import './Footer.css'

const Footer = () => {
  return(
    <div className="footer">
      <div className="footercontent">
          <div className="info">
            <a href="/"><img src={s2blogowhite} alt="s2blogo" /></a>
            <div className="location">
              <span><img src={locationonwhite} alt="location" /></span>
              <p>
              Skills2Bank, 9 Elmwood Road, London W4 3DY, United Kingdom
              </p>
            </div>
            <div className="location">
              <span><img src={phonewhite} alt="phone" /></span>
              <p>
              +44 (0)20 3394 0144
              </p>
            </div>
            <div className="location">
              <span><img src={sendwhite} alt="send" /></span>
              <p>
              info@skills2bank.com
              </p>
            </div>
          </div>
          <div className="quicklinks">
              <h2>Quick Links</h2>
              <div className="links">
                <p><a href="/">Home </a></p>
                <p><a href="#employee">Employers</a></p>
                <p><a href="#employability">Employability Providers</a></p>
                <p><a href="#aboutus">About Us</a></p>
                <p><a href="#contact">Contact Us</a></p>
                <p>Diversity and Inclusion Policy</p>
              </div>
          </div>
      </div>
      <div className="copyright">
        <hr style={{color:`white`,background:`white`}}/>
        <div className="policy">
          <div className="copyrighttext">
            © 2020 by Skills2Bank.
          </div>
          <div className="privacy">
            <div className="privacypolicy" style={{marginRight:7}}>
              <a href="/privacypolicy">Privacy Policy</a>
            </div>
            <div className="terms" >
              <a href="/terms"> | Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer