import React, { useEffect } from 'react'
import './Main.scss'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import img from '../../assets/img.jpg';
// import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import img6 from '../../assets/img6.jpg';
import img7 from '../../assets/img7.jpg';
import img8 from '../../assets/img8.jpg';
import img9 from '../../assets/img9.jpg';
import img10 from '../../assets/img10.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css'



const Data = [
{
  id:1,
  imgSrc: img,
  destTitle: 'bora bora',
  loaction:'new zealand',
  grade:'CULTURal Relax',
  fee:'$700',
  description:'Globally underwhelm Proactively build turnkey opportunities for team building partnerships',
},
{
  id:10,
  imgSrc: img10,
  destTitle: 'bora bora',
  loaction:'new zealand',
  grade:'CULTURal Relax',
  fee:'$700',
  description:'Globally underwhelm Proactively build turnkey opportunities for team building partnerships',
},
{
  id:3,
  imgSrc: img3,
  destTitle: 'bora bora',
  loaction:'new zealand',
  grade:'CULTURal Relax',
  fee:'$700',
  description:'Globally underwhelm Proactively build turnkey opportunities for team building partnerships',
},
{
  id:4,
  imgSrc: img4,
  destTitle: 'bora bora',
  loaction:'new zealand',
  grade:'CULTURal Relax',
  fee:'$700',
  description:'Globally underwhelm Proactively build turnkey opportunities for team building partnerships',
},
{
  id:5,
  imgSrc: img5,
  destTitle: 'bora bora',
  loaction:'new zealand',
  grade:'CULTURal Relax',
  fee:'$700',
  description:'Globally underwhelm Proactively build turnkey opportunities for team building partnerships',
},
{
  id:6,
  imgSrc: img6,
  destTitle: 'fahad land',
  loaction:'space ',
  grade:'CULTURal Relax',
  fee:'$27000',
  description:'Globally underwhelm Proactively build turnkey opportunities for team building partnerships',
},
{
  id:7,
  imgSrc: img7,
  destTitle: 'Fahad Land',
  loaction:'Space',
  grade:'CULTURal Relax',
  fee:'$27000',
  description:'Globally underwhelm Proactively build turnkey opportunities for team building partnerships',
},
{
  id:8,
  imgSrc: img8,
  destTitle: 'bora bora',
  loaction:'new zealand',
  grade:'CULTURal Relax',
  fee:'$700',
  description:'Globally underwhelm Proactively build turnkey opportunities for team building partnerships',
},
{
  id:9,
  imgSrc: img9,
  destTitle: 'bora bora',
  loaction:'new zealand',
  grade:'CULTURal Relax',
  fee:'$700',
  description:'Globally underwhelm Proactively build turnkey opportunities for team building partnerships',
},




]





const Main = () => {

   
  useEffect(() => {
    Aos.init({duration:2000})

  },[])




  return (
<section className=" main-container section">
  <div className="secTitle">
    <h3 data-aos="fade-right" className="title">
      most visited denstinations
    </h3>
  </div>
  <div  className="secContent grid ">
    {
      Data.map(({id, imgSrc, destTitle, loaction,  grade, fee, description })=>{
        return(
          <div data-aos="fade-up" key={id} className="singleDestonation">
            <div className="imageDiv">
              <img src={imgSrc} alt={destTitle}/>
            </div>
            <div className="cardInfo">
              <h4 className="desttitle">{destTitle}</h4>
              <span className="continent flex">
                <HiOutlineLocationMarker className='icon'/>
                <span className='name'> {loaction}</span>
              </span>
              <div className="fees flex">
                <div className="grade">
                  <span>{grade}<small>1+</small></span>
                </div>
                <div className="price">
                  <h5>{fee}</h5>
                </div>
              </div>
              <div className="desc">
                <p>{description}</p>
              </div>
              <button className='btn flex'>
                detlis <HiOutlineClipboardCheck className=" icon"/>

              </button>

            </div>
          </div>  
        )

      })
    }

    </div> 

</section>

)
}

export default Main