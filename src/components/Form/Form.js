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
        <img src={person} />
        <input type="text" name="name" placeholder="Name *"/>
      </div>
      <div className="profession">
        <img src={office} />
        <select>
          <option selected>I am *</option>
          <option value="Student or Employment Seeker">Student or Employment Seeker</option>
          <option value="Employer">Employer</option>
          <option value="Educational Institute or Employability Provider">
            Educational Institute or Employability Provider</option>
        </select>
      </div>
      <div className="user">
        <img src={mail} />
        <input type="text" name="email" placeholder="Email *"/>
      </div>
      <div className="message">
        <textarea type="text" name="message" placeholder="Write a message*" />
      </div>
      <button className="send">
        Send Message</button>
    </form>
    </>
  )
}

export default Form