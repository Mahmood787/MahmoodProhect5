import React, { useEffect } from 'react'
import './section2.css'
import 'aos/dist/aos.css'
import useWebAnimation, {backInLeft} from '@wellyshen/use-web-animations'
import Aos from 'aos'
import imgg1 from '../../images/imgg1.jpg'
import imgg2 from '../../images/imgg2.jpg'
import imgg3 from '../../images/imgg3.jfif'
import imgg4 from '../../images/imgg4.jpg'
import imgg5 from '../../images/imgg5.jpg'


const Section2 = () => {
    useEffect(()=>{
        Aos.init({duration:1000})
    })
    const message = useWebAnimation({...backInLeft})
    return (
        <div className="section-s"  data-aos="fade-left" data-aos-duration="3000">
            <div className="message" data-aos="flip-left"  >
            <h1 className="h11" ><span>M</span>essage <span>F</span>rom <span>T</span>he <span>R</span>ector</h1>
            <p>We've all called or chatted with customer support, posted to a brand on social or joined an online community. Think about the best experience you had with an agent, community manager or moderator. We do that, and we do it for the world's coolest brands.</p>
            </div>
            <div className="performers" data-aos="fade-left" data-aos-duration="3000">
                <h1 className="h11"><span>O</span>ur <span>T</span>eam</h1>
                 <div className="pics">
                     <div className="pic">
                         <img src={imgg1} alt=""/>
                         <h3>Head of Deptt.</h3>
                     </div>
                     <div className="pic">
                         <img src={imgg3} alt=""/>
                         <h3>Principle</h3>
                     </div>
                     <div className="pic">
                         <img src={imgg3} alt=""/>
                         <h3>Sr. Professor</h3>
                     </div>
                     <div className="pic">
                         <img src={imgg4} alt=""/>
                         <h3>Proffeser</h3>
                     </div>
                     <div className="pic">
                         <img src={imgg5} alt=""/>
                         <h3>Sr. Teacher</h3>
                     </div>
                 </div>
            </div>
        </div>
    )
}
export default Section2
