import React, { useEffect } from 'react'
import './Home.scss'
import video from '../../assets/videoss.mp4'
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";


import Aos from 'aos';
import 'aos/dist/aos.css'


const Home = () => {
   
  useEffect(() => {
    Aos.init({duration:2000})

  },[])



  return (
    <section className='Home'>
      <div className='overlay'></div>
        <video src={video} muted autoPlay loop typeof="video/mp4"></video>
          <div className="homeContent container">
            <div className="textDiv">
              <span data-aos="fade-up"   className="smallText">
                our package
              </span>
              <h1  data-aos="fade-up" className="homeTitle">
                search your holiday
              </h1>
            </div>
            <div data-aos="fade-up" className="cardDiv grid">
              <div className="destinationInput">
                <label htmlFor='city'> search your destination:</label>
                <div className="input flex">
                  <input type="text" placeholder='Enter name here...'/>
                    <GrLocation className='icon'/>  
                </div>
              </div>
              <div className="dateInput">
                <label htmlFor='date'> select your date:</label>
                <div className="input flex">
                  <input type="date" />
                </div>
              </div>
              <div className="priceInput">
              <div className="label_total flex">
                <label htmlFor="price"> max price :</label>
                <h3 className="total">$50000</h3>
              </div>
              <div className="input flex">
                <input type="range" max="5000" min="1000"  />
              </div>
              </div>
              <div className="searchOption flex">
                <HiFilter className='iconfilter'/>
                <span>more filter</span>
              </div>
            </div>
            <div data-aos="fade-up" className="homeFooterIcons flex">
              <div className="rightIcons">
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
              <div className="leftIcons">
              <BsListTask className="icon"/>
              <TbApps className="icon"/>
              
                
                </div>
            </div>
          </div>
    </section>

 )
}

export default Home