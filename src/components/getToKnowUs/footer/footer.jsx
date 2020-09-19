import React from 'react'
import './footer.css'
import Logo from '../../../images/mainlogo.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="sub-footer">
                <img src={Logo} alt=""/>
                <h2>Want to Reach Us?</h2>
                <p>Embark on an exciting career with us to learn and grow alongside the best in the industry</p>
                <a href="career#current-open">View current openings</a>
            </div>
            <div className="main-footer">
                <ul>
                    <li><a href="www.facebook.com"> Home </a></li>
                    <li><a href="www.facebook.com"> About </a></li>
                    <li><a href="www.facebook.com"> Services </a></li>
                    <li><a href="www.facebook.com"> Career </a></li>
                    <li><a href="www.facebook.com"> Contact </a></li>
                </ul>
                <span>Follow Us :
                    <a href="www.fac`eboo.com"><i className="fab fa-facebook-f"></i></a>
                    <a href="www.faceboo.com"><i className="fab fa-linkedin-in"></i></a>
                
                </span>
            </div>
            <div className="bottom-footer">
                <p>All right reserved ©2020 Mahmood.com</p>
                <p>Created by : <a href="www.facebook.com">Mahmood Ahmed Khan</a></p>
            </div>

        </div>
    )
}

export default Footer
