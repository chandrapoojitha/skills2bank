import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import image1 from '../assets/image1.svg'
import part1image from '../assets/part1image.webp'
import styles from '../components/index.module.css'
import roots from '../assets/roots.png'
import part2_2img from '../assets/part2_2img.webp'
import part2_3img from '../assets/part2_3img.webp'
import part2_4img from '../assets/part2_4img.webp'
import part2_5img from '../assets/part2_5img.webp'
import part2_6img from '../assets/part2_6img.webp'
import part4_1img from '../assets/part4_1img.webp'
import part4_2img from '../assets/part4_2img.webp'
import part4_3img from '../assets/part4_3img.webp'
import employeeimg from '../assets/employeeimg.webp'
import employabiltyimg from '../assets/employabilityimg.webp'
import fb from '../assets/fb.webp'
import insta from '../assets/insta.png'
import youtube from '../assets/youtube.png'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'
import google_play from '../assets/google_play.webp'
import playstore from '../assets/playstore.webp'
import ContactForm from '../components/Form/Form'

const IndexPage = () => {
  return(
  <Layout>
    <SEO title="Skills2Bank - Be prepared, Be confident, Be successful! " />
    <div className={styles.part1}>
      <div className={styles.part1text}>
        <div className={styles.text}>
          <h2>Be Prepared, Be Confident Be Successful!</h2>
          <p>Discover your hidden talents and get the job/course you deserve.</p>
          <div className={styles.textimage}>
            <img src={part1image} alt="part1image"/>
          </div>
          <div className={styles.buttons}>
            
            <a href="https://play.google.com/store/apps/details?id=com.skill2bank&hl=en_GB" 
            target="_blank" rel="noreferrer">
            <img src={google_play} alt="googleplay"/></a>
            
            <a href=" https://apps.apple.com/us/app/skills2bank/id1523315759" 
            target="_blank" rel="noreferrer">
            <img src={playstore} alt="playstore" /></a>
          </div>
        </div>
      </div>
      <div className={styles.imagepart}>
        <div className={styles.image}>
          <img src={image1} alt="image1" />
        </div>
        <div className={styles.part1image}>
          <img className="part1image" src={part1image} alt="part1image" />
        </div>
      </div>
    </div>
    <div className={styles.part2}>
      <div className={styles.part2heading}>
        <p>What can <b style={{color:`#14AEB8`}}>Skills2Bank</b> do for you<b>?</b></p>
      </div>
      <div className={styles.part2list}>
        <div className={styles.roots}>
          <div className={styles.rootstext}>
            <p>Improve confidence and self awareness from hundreds of 
              'Skills Posts' from employers and educational organisations.
             </p>
          </div>
          <div className={styles.rootsinfo}>
            <div className={styles.part2_1img}>
              <img src={roots} alt="roots" />
            </div>
          </div>
        </div>
        <div className={styles.skills}>
          <div className={styles.skillsinfo}>
            <div className={styles.skillsimg}>
              <img className={styles.part2_2img} src={part2_2img} alt="part2_2img" />
            </div>
          </div>
          <div className={styles.skillstext}>
            <p>Identify hidden talents and skills including digital, teamwork, 
              communications creativity, problem-solving and many more.
            </p>
          </div>
        </div>
        <div className={styles.part2_3}>
          <div className={styles.part2_3text}>
            <p>Browse and save relatable 'skills posts' from sports, 
              clubs, hobbies, academic life, work experience, internships, 
              university employability courses, BLM/BAME/ESOL, caregiving, 
              disabilities and lockdown.
             </p>
          </div>
          <div className={styles.part2_3info}>
            <div className={styles.part2_3img}>
              <img src={part2_3img} alt="part2_3img" />
            </div>
          </div>
        </div>
        <div className={styles.skills}>
          <div className={styles.skillsinfo}>
            <div className={styles.skillsimg}>
              <img className={styles.part2_4img} src={part2_4img} alt="part2_4img" />
            </div>
          </div>
          <div className={styles.skillstext}>
            <p>Save discovered skills to your in-app "Skills Bank" for future reference.
             </p>
          </div>
        </div>
        <div className={styles.roots}>
          <div className={styles.rootstext}>
            <p>Use banked skills together with in-app interview, CV , 
              personal statements tips to prepare winning applications 
              and boost interview confidence.
             </p>
          </div>
          <div className={styles.rootsinfo}>
            <div className={styles.rootsimg}>
              <img className={styles.part2_5img} src={part2_5img} alt="part2_5img" />
            </div>
          </div>
        </div>
        <div className={styles.skills}>
          <div className={styles.skillsinfo}>
            <div className={styles.skillsimg}>
              <img className={styles.part2_6img} partsrc={part2_6img} alt="part2_6img" />
            </div>
          </div>
          <div className={styles.skillstext}>
            <p>Connect with virtual internships, university, job 
              opportunities from employers that believe in supporting 
              the environment, diversity and disability inclusion.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.part3}>
      <div className={styles.part3text}>
        <h3>It's Fun!</h3>
        <p>The app is more like Facebook, Instagram, Pinterest, 
          TikTok, SnapChat than PowerPoint, Pdf's or endless Google searches.
        </p>
      </div>
    </div>
    <div className={styles.part4} >
      <div className={styles.part2heading} id="aboutus">
        <p>Why <b style={{color:`#14AEB8`}}>Skills2Bank?</b></p>
      </div>
      <div className={styles.roots}>
        <div className={styles.rootstext}>
          <p>Young people often lack confidence and have difficulty 
              describing transferable skills; it makes them nervous 
              about interview and applications.
          </p>
        </div>
        <div className={styles.rootsinfo}>
          <div className={styles.part4_1img}>
            <img src={part4_1img} alt="part4_1img" />
          </div>
        </div>
      </div>
      <div className={styles.skills}>
        <div className={styles.skillsinfo}>
          <div className={styles.part4_2img}>
            <img src={part4_2img} alt="part4_2img" />
          </div>
        </div>
        <div className={styles.skillstext}>
          <p>There are massive youth unemployment issues, 
            and with Covid-19 its more important than ever 
            to promote Diversity & Inclusion for BAME and Disability candidates.
          </p>
        </div>
      </div>
      <div className={styles.roots}>
        <div className={styles.rootstext}>
          <p>Skills2Bank inspires confidence in all young people 
            for interviews, assessments and Higher Education 
            applications discovery of transferable skills and hidden talents.
          </p>
        </div>
        <div className={styles.rootsinfo}>
          <div className={styles.part4_1img}>
            <img src={part4_3img} alt="part4_3img" />
          </div>
        </div>
      </div>
    </div>
    <div className={styles.part5}>
      <div className={styles.part5text}>
        <p>We are committed to Diversity & Inclusion and are Disability Positive
        </p>
      </div>
    </div>
    <div className={styles.part6}>
      <div className={styles.employee} id="employee">
        <div className={styles.employeeinfo}>
          <div className={styles.employeeimg}>
            <img src={employeeimg} alt="employeeimg" />
          </div>
        </div>
        <div className={styles.employeetext}>
          <h2>What's in it for <b style={{color:`#14AEB8`}}>Employers?</b></h2>
          <ul>
            <li>
              <p>Reinforce your Diversity & Inclusion messaging and credentials.</p>
            </li>
            <li>
              <p>Connect your talent teams with a wide range of candidates 
                that recognise your commitment to environmental, diversity 
                and inclusion in your job postings.
              </p>
            </li>
          </ul>
          <button className={styles.part1button}><a href="/#contact">Join as an Employer</a></button>
        </div>
      </div>
      <div className={styles.employability} id="employability">
        <div className={styles.employabilitytext}>
          <h2>What's in it for <b style={{color:`#14AEB8`}}>Education & Employability </b>
          Providers?</h2>
              <p>Motivate users and improve outcomes by using the app 
                to showcase your 'skills success stories' from 
                employability and widening participation activities. 
                An app is the best way to engage with Gen Z.
              </p>
          <button className={styles.part1button}><a href="/#contact">Partner with Us!</a></button>
        </div>
        <div className={styles.employabilityinfo}>
          <div className={styles.employabilityimg}>
            <img src={employabiltyimg} alt="employabiltyimg" />
          </div>
        </div>
      </div>
    </div>
    <div className={styles.part7}>
      <div className={styles.part2heading} id="follow">
        <p><b style={{color:`#14AEB8`}}>Follow Us </b>on Social Media</p>
      </div>
      <div className={styles.follow}>
        <div className={styles.iconlist}>
          <div className={styles.icon}>
            <div className={styles.icomimg}>
              <a href="https://www.facebook.com/Skills2Bank-102692441114850" target="_blank"
              rel="noreferrer">
                <img src={fb} alt="fb" />
              </a>
            </div>
            <div className={styles.icon_name}>
              <span>Facebook</span>
            </div>
          </div>
          <div className={styles.icon}>
            <div className={styles.icomimg}>
              <a href="https://www.instagram.com/skills2bank/" target="_blank"
              rel="noreferrer">
                <img src={insta} alt="insta" />
              </a>
            </div>
            <div className={styles.icon_name}>
              <span>Instagram</span>
            </div>
          </div>
          <div className={styles.icon}>
            <div className={styles.icomimg}>
              <a href="https://www.youtube.com/channel/UCyS_uidXq4U1CSzdRjRvSVQ" target="_blank"
              rel="noreferrer">
              <img src={youtube} alt="youtube" />
              </a>
            </div>
            <div className={styles.icon_name}>
              <span>Youtube</span>
            </div>
          </div>
          <div className={styles.icon}>
            <div className={styles.icomimg}>
              <a href="https://www.linkedin.com/company/skills2use-ltd/?viewAsMember=true" 
              target="_blank" rel="noreferrer">
              <img src={linkedin} alt="linkedin" />
              </a>
            </div>
            <div className={styles.icon_name}>
              <span>LinkedIn</span>
            </div>
          </div>
          <div className={styles.icon}>
            <div className={styles.icomimg}>
              <a href="https://twitter.com/MySkills2Bank" target="_blank" rel="noreferrer">
              <img src={twitter} alt="twitter" />
              </a>
            </div>
            <div className={styles.icon_name}>
              <span>Twitter</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.part8}>
      <div className={styles.contactpart}>
      <div className={styles.contactheading} id="contact">
        <h2><b style={{color:`#14AEB8`}}>Contact </b>Us</h2>
        <p>
          We’d love to connect with you! Please leave us a message.
        </p>
      </div>
      <ContactForm />
      </div>
    </div>
    <button id="scroll-btn" className={styles.sidebar_btns} title="Scroll to top"></button>
  </Layout>
)};

export default IndexPage
