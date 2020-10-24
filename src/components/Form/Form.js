import React, {useState} from 'react'
import './Form.css'
import person from '../../assets/person.svg'
import office from '../../assets/office.svg'
import mail from '../../assets/mail.svg'

const ContactForm =() => {
  const [Formstate, setFormState] = useState({
    name:"",
    email:"",
    profession:"",
    message:"",
    feedbackMsg:null
  });

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleChange = (e) => {
    setFormState({ ...Formstate, [e.target.name]: e.target.value });

  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState({message:''});
    e.target.reset();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contactus",
        ...Formstate,
      }),
    }).then((response) => {
      setFormState({
        feedbackMsg: "Form submitted successfully!",
      })
    })
    .catch((err) => {
      setFormState({
        feedbackMsg: "Form could not be submitted.",
      })
    })
    console.log('Form submitted');
  }

  return(
    <div className="contact">
    <form name="contactform" method="POST" onSubmit={handleSubmit}
        data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contactform" />
      <p className="user">
        <div className="usericon">
        <img src={person} />
        </div>
        <input type="text" name="name" placeholder="Name *"
        onChange={handleChange} required value={Formstate.name}/>
      </p>
      <p className="profession">
        <div className="officeicon">
        <img src={office} />
        </div>
        <select required name="profession" 
        onChange={handleChange} required value={Formstate.profession}>
          <option selected>I am *</option>
          <option value="Student or Employment Seeker">Student or Employment Seeker</option>
          <option value="Employer">Employer</option>
          <option value="Educational Institute or Employability Provider">
            Educational Institute or Employability Provider</option>
        </select>
      </p>
      <p className="user">
        <p className="usericon">
        <img src={mail} />
        </p>
        <input type="text" name="email" placeholder="Email *"
        onChange={handleChange} required value={Formstate.email}/>
      </p>
      <p className="message">
        <textarea type="text" name="message" placeholder="Write a message*" 
        onChange={handleChange} required value={Formstate.message}/>
      </p>
      {Formstate.feedbackMsg}
      <p className="sendbutton">
        <button className="send" type="submit">Send Message</button>
      </p>
    </form>
    </div>
  )
}

export default ContactForm