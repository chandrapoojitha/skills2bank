import React, {useState} from 'react'
import './Form.css'
import person from '../../assets/person.svg'
import office from '../../assets/office.svg'
import mail from '../../assets/mail.svg'

const Form =() => {
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
      
    })
    console.log('Form submitted')
  }

  return(
    <div className="contact">
    <form name="contactform" method="POST"  action="/" onSubmit={handleSubmit}
        data-netlify="true" data-netlify-honeypot="bot-field" netlify>
      <input type="hidden" name="form-name" value="contactform" />
      <div className="user">
        <div className="usericon">
        <img src={person} />
        </div>
        <input type="text" name="name" placeholder="Name *"
        onChange={handleChange} required value={Formstate.name}/>
      </div>
      <div className="profession">
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
      </div>
      <div className="user">
        <div className="usericon">
        <img src={mail} />
        </div>
        <input type="text" name="email" placeholder="Email *"
        onChange={handleChange} required value={Formstate.email}/>
      </div>
      <div className="message">
        <textarea type="text" name="message" placeholder="Write a message*" 
        onChange={handleChange} required value={Formstate.message}/>
      </div>
      <div className="sendbutton">
        <button className="send" >
        Send Message</button>
      </div>
    </form>
    </div>
  )
}

export default Form