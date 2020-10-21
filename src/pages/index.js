import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import image1 from '../assets/image1.svg'
import part1image from '../assets/part1image.png'
import styles from '../components/index.module.css'
import roots from '../assets/roots.png'
import part2_2img from '../assets/part2_2img.png'
import part2_3img from '../assets/part2_3img.png'
import part2_4img from '../assets/part2_4img.svg'
import part2_5img from '../assets/part2_5img.svg'
import part2_6img from '../assets/part2_6img.svg'
import part4_1img from '../assets/part4_1img.png'
import part4_2img from '../assets/part4_2img.png'
import part4_3img from '../assets/part4_3img.png'
import employeeimg from '../assets/employeeimg.png'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.part1}>
      <div className={styles.part1text}>
        <div className={styles.text}>
          <h2>Be prepared, Be Confident Be Successful</h2>
          <p>Discover your hidden talents and get the job/course you deserve.</p>
          <button className={styles.part1button}>
            <a href="https://play.google.com/store/apps/details?id=com.skill2bank&hl=en_GB">
            Download Now </a></button>
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
        <p>What can <b style={{color:`#14AEB8`}}>Skills2Bank</b> do for you?</p>
      </div>
      <div className={styles.part2list}>
        <div className={styles.roots}>
          <div className={styles.rootstext}>
            <p>Improve confidence and self awareness from hundreds of 
              'Skills Posts' from employers and educational organisations.
             </p>
          </div>
          <div className={styles.rootsinfo}>
            <div className={styles.rootsimg}>
              <img src={roots} alt="roots" />
            </div>
          </div>
        </div>
        <div className={styles.skills}>
          <div className={styles.skillsinfo}>
            <div className={styles.skillsimg}>
              <img src={part2_2img} alt="part2_2img" />
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
              <img src={part2_4img} alt="part2_4img" />
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
              <img src={part2_5img} alt="part2_5img" />
            </div>
          </div>
        </div>
        <div className={styles.skills}>
          <div className={styles.skillsinfo}>
            <div className={styles.skillsimg}>
              <img src={part2_6img} alt="part2_6img" />
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
        <h3>It's Fun</h3>
        <p>The app is more like Facebook, Instagram, Pinterest, 
          TikTok, SnapChat than PowerPoint, Pdf's or endless Google searches.
        </p>
      </div>
    </div>
    <div className={styles.part4} >
      <div className={styles.part2heading} id="part4">
        <p>Why <b style={{color:`#14AEB8`}}>Skills2Bank</b> ?</p>
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
          <button className={styles.part1button}>Join as an Employer</button>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
