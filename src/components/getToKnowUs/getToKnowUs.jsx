import React, { useEffect } from 'react'
import CountUp from 'react-countup'
import './getToKnowUs.css'
import useWebAnimation from '@wellyshen/use-web-animations'
import Aos from 'aos'
import 'aos/dist/aos.css'
import VisibilitySensor from 'react-visibility-sensor';
import { counter } from '@fortawesome/fontawesome-svg-core'
// import CountUp from 'react-countup'; 

const GetToKnowUs = () => {
    console.log(CountUp)
    useEffect(()=>{
        Aos.init()
    })
    return (
        <div className="getToKnow">
        <div className="uniqueness-h1p">
        <h1><span>S</span>ome <span>F</span>eatures <span>T</span>hat <span>M</span>ade <span>U</span>s <span>U</span>nique</h1>
        <p>Who are in extremely love with eco friendly system.</p> 
        </div> 
            <div className="uniqueness">
                <div className="uniqueness-box">
                    <h4><span><i className="far fa-user"></i></span> Professional Teachers</h4>
                    <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                </div>
                <div className="uniqueness-box">
                    <h4><span><i className="fas fa-address-card"></i></span> Great Support</h4>
                    <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                </div>
                <div className="uniqueness-box">
                    <h4><span><i className="fas fa-phone-alt"></i></span> Technical Skills</h4>
                    <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                </div>
                <div className="uniqueness-box">
                <h4><span><i className="fas fa-rocket"></i></span> Highly Recomended</h4>
                    <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                </div>
                <div className="uniqueness-box">
                    <h4><span><i className="far fa-gem"></i></span> Positive Reviews</h4>
                    <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                </div>
                <div className="uniqueness-box">
                    <h4><span><i className="far fa-comment-dots"></i></span> Professional Services</h4>
                    <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                </div>
            </div>
            {/* Counter */}
            <div className="counter" data-aos="fade-in">
                <div className="count">
                    <CountUp start={0} end={5556} redraw={true}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                    <p>Total Students</p>
                </div>
                <div className="count">
                <CountUp start={0} end={556} redraw={true}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>            
                    <p>Positon Holders</p>
                </div>
                <div className="count">
                    <CountUp start={0} end={876} redraw={true}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp> 
                    <p>Foreign Students</p>
                </div>
                <div className="count">
                    <CountUp start={0} end={15} redraw={true}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                    <p>Number of Campus</p>
                </div>
            </div>
        </div>
    )
}

export default GetToKnowUs
