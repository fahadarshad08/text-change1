import React, { useEffect } from 'react'
import './footer.scss'
import video2 from '../../assets/Beach.mp4'
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { FiFacebook } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { FiChevronRight } from "react-icons/fi";

import Aos from 'aos';
import 'aos/dist/aos.css'


const Footer = () => {

  useEffect(() => {
    Aos.init({duration:1500})
  },[])
  

  return (

      <section className="footer">
        <div className="videoDiv">
        <video src={video2} muted autoPlay loop typeof="video/mp4"></video>
        </div>
        <div className=" secContent container">
          <div className= "contactDiv flex">
              <div data-aos="fade-up" className="text">
              <small>KEEP IN TOUCH</small>
              <h2>Travel with us</h2>
              </div>
              <div className="inputDiv flex">
                <input data-aos="fade-up"  type="text" placeholder='enter email  address'/>
                <button  data-aos="fade-up"  className='btn flex ' type='submit'>
                 send <FiSend className="icon"/> 
                </button>

              </div>
          </div>
          <div className= "footerCard flex">
            <div className="footerIntro flex">
              <div className="logoDiv">
                <a href="/" className="logo flex ">
                  <h1> <MdTravelExplore  className="icon" /> taraval.</h1>
                </a>
              </div>
                <div  data-aos="fade-up" className="footerParagraph">
                Interactively parallel task performance based processes without.
                </div>
                <div data-aos="fade-up"  className="footerSocials flex">
                <a href="https://facebook.com/fahadarshad789">
                <FiFacebook className="icon"/>
              </a>
              <a href="https://instagram.com/fahadarshad52">
                <GrInstagram className="icon"/>
                </a>
                <a href="https://twitter.com/fahadarshad08">
                <GrTwitter className="icon"/>
                </a>
                </div>


            </div>
            <div className="footerLinks grid">
              {/* group One */}
              <div data-aos="fade-up" data-aos-duration ="4000"   className="linkGroup">
                  <span className="groupTitle">
                    OUR AGENCY
                  </span>
                  <li className="footerList flex">
                    <FiChevronRight className="icon"/>
                    Service
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className="icon"/>
                    Insurance
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className="icon"/>
                    Agency
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className="icon"/>
                    Tourism
                  </li>
                  <li className="footerList flex">
                    <FiChevronRight className="icon"/>
                    payment
                  </li>

              </div>
              {/* group two */}

              <div data-aos="fade-up" data-aos-duration ="5000" className="linkGroup">
                  <span className="groupTitle">
                    PARTNERS
                  </span>
                  <li className="footerList flex">
                    <FiChevronRight className="icon"/>
                    Booking
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className="icon"/>
                    Rentcars
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className="icon"/>
                    HostelWorld
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className="icon"/>
                    Trivago
                  </li>
                  <li className="footerList flex">
                    <FiChevronRight className="icon"/>
                    TriPad
                  </li>

              </div>
              {/* group Three */}

              <div data-aos="fade-up" data-aos-duration ="6000"  className="linkGroup">
                  <span className="groupTitle">
                    LAST MINTUE
                  </span>
                  <li className="footerList flex">
                    <FiChevronRight className="icon"/>
                    Pakistan
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className="icon"/>
                    California
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className="icon"/>
                    Indonesia
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className="icon"/>
                    Europe
                  </li>
                  <li className="footerList flex">
                    <FiChevronRight className="icon"/>
                    London
                  </li>

              </div>
            </div>  

            <div className="footerDiv flex">

          <small>BEST TRIVAL WEBSITE </small>
          <small>COPYRIGHT RESERVED - FAHADARSHAD  2022</small>
            </div>
          </div>
        </div>
      </section>


    )
}

export default Footer








