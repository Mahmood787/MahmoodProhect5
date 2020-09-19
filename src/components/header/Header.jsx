import React, { useState,useEffect, useRef } from 'react'
import Aos from 'aos'
import './header.css'
import useWebAnimation from '@wellyshen/use-web-animations'

const Header = () => {
    useEffect(()=>{
        Aos.init({duration:5000});
    },[])
    const [scroll, setScroll]= useState(false);
        document.addEventListener('scroll',()=>{
            if(window.scrollY>200){
                setScroll(true)
            }else{ setScroll(false)}
        })

const inputEl = useRef(null);
    return (
        <div className="header-bg">
            <div className={scroll ? "header scrolled" : "header"}>
                <div className="top-bar">
                    <div className="branding">
                        <h2>The School</h2>
                    </div>
                    <ul className="nav">
                        <li><a href="//#endregion" className="hello1">Home</a></li>
                        <li><a href="//#endregion" className="hello2">About</a></li>
                        <li><a href="#" className="hello3">Services</a></li>
                        <li><a href="#" className="hello4">Products</a></li>
                        <li><a href="//#endregion" className="hello5">Constact</a></li>
                    </ul>
                    <div className="right">
                        <span>FAQ</span>
                        <input type="search-box" placeholder="search"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
