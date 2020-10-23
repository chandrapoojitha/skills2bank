import React from 'react'
import './Form.css'
import person from '../../assets/person.svg'
import office from '../../assets/office.svg'
import mail from '../../assets/mail.svg'

const Form =() => {
  return(
    <>
    <form name="contactform">
      <div className="user">
        <div className="usericon">
        <img src={person} />
        </div>
        <input type="text" name="name" placeholder="Name *"/>
      </div>
      <div className="profession">
        <div className="officeicon">
        <img src={office} />
        </div>
        <select>
          <option selected>I am *</option>
          <option value="Student or Employment Seeker">Student or Employment Seeker</option>
          <option value="Employer">Employer</option>
          <option value="Educational Institute or Employability Provider">
            Educational Institute or Employability Provider</option>
        </select>
      </div>
      <div className="user">
        <div className="usericon">
        <img src={mail} />
        </div>
        <input type="text" name="email" placeholder="Email *"/>
      </div>
      <div className="message">
        <input type="text" name="message" placeholder="Write a message*" />
      </div>
      <div className="sendbutton">
        <button className="send">
        Send Message</button>
      </div>
    </form>
    </>
  )
}

export default Form