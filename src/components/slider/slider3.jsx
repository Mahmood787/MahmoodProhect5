import React, { useEffect } from 'react'
import './slider3.css'
import im1 from '../../images/im1.jpg'
import im2 from '../../images/im2.jpg'
import im3 from '../../images/im3.jpg'
import im4 from '../../images/im4.jpg'
import im5 from '../../images/im5.jpg'
import useWebAnimation from '@wellyshen/use-web-animations'
import Section2 from '../section2/section2'

const Slider3 = () => {
    //to access button click
    var btnRight = useWebAnimation()
    var btnLeft = useWebAnimation()
    var indexBody = useWebAnimation()
    var icon = useWebAnimation()
 //Use web animations to create animations, with left and right slides sharing one animation
var slidingLeft = [
    {marginLeft: '0px', opacity: 1},
    {opacity: 0.6, offset: 0.7},
    {marginLeft: "-5rem", opacity: 1}
];
    var sliding = useWebAnimation({
        keyframes :slidingLeft,
        timing:{
            duration: 1500,
            easing: 'ease-in-out',
        }
    });
//button functions
    const slideRight=()=>{
        sliding.getAnimation().playbackRate  =1; // switch sliding direction to right
        sliding.getAnimation().play();
        btnRight.ref.current.onclick= null
        btnLeft.ref.current.onclick= null 
        // console.log(sliding.effect);
    };
    function slideLeft(){
        var items = sliding.ref.current.getElementsByClassName("slide_item")
        sliding.ref.current.insertBefore(items[items.length - 1],items[0]);
        sliding.ref.current.style.marginLeft = '-5rem';
        sliding.getAnimation().playbackRate  =- 1; // switch sliding direction to left
        sliding.getAnimation().play();
        btnRight.ref.current.onclick= null
        btnLeft.ref.current.onclick= null 
       };
    useEffect(()=>{
        sliding.getAnimation().onfinish = function(){
            var items = sliding.ref.current.getElementsByClassName("slide_item")
            sliding.ref.current.style.marginLeft='0px'
            if(sliding.getAnimation().playbackRate != -1){
                sliding.ref.current.appendChild(items[0]);
            }
            btnRight.ref.current.onclick= slideRight;
            btnLeft.ref.current.onclick= slideLeft;
            console.log(items)
        };
        //Auto slide
        var slideTimer = setInterval(() => {
            btnRight.ref.current.click();
        },5000);
        //Stop sliding on mouse hover
        indexBody.ref.current.onmouseover = function(){
            clearInterval(slideTimer);
        };
        //Continue to slide automatically when the mouse leaves
            indexBody.ref.current.onmouseout = function(){
                slideTimer = setInterval(() => {
                    btnRight.ref.current.click();
                },5000);
            };
        console.log(sliding.ref.current.style.marginLeft)
    },[])
    return (
        <>
        <div className="slide-container">
            <div className="index_body" ref={indexBody.ref}>
                <img className="left_btn"  ref={btnLeft.ref} src="https://i.loli.net/2018/12/09/5c0cd5ba4b7c3.jpg"/>	
                <div className="slidebox " ref={sliding.ref}>
                    <div className="slide_item">
                        <div className="h1p">
                        <h1>1 Highly Qualified & Experience Faculty </h1>
                        <h1>With Oxford Certifiation </h1>
                        <p>Lorum ipsuLorum ipsuLorum ipsuLorum ipsuLorum ipsu</p>
                        <p>Lorum ipsuLorum ipsuLorum ipsuLorum ipsuLo</p>
                        <p>Lorum ipsuLorum ipsuLorum ipsuLoru</p>
                        <p>Lorum ipsuLorum ipsuLorum </p>
                        <button>Find More</button>
                        </div>
                        <img src={im1} title="image1" alt="color1"/>
                    </div>
                    <div className="slide_item"> 
                                <div className="h1p">
                        <h1>2 Highly Qualified & Experience Faculty </h1>
                        <h1>With Oxford Certifiation </h1>
                        <p>Lorum ipsuLorum ipsuLorum ipsuLorum ipsuLorum ipsu</p>
                        <p>Lorum ipsuLorum ipsuLorum ipsuLorum ipsuLo</p>
                        <p>Lorum ipsuLorum ipsuLorum ipsuLoru</p>
                        <p>Lorum ipsuLorum ipsuLorum </p>
                        <button>Find More</button>
                        </div>
                        <img src={im2} title="image2" alt="color2"/>
                    </div>
                    <div className="slide_item">  
                                <div className="h1p">
                        <h1>3 Highly Qualified & Experience Faculty </h1>
                        <h1>With Oxford Certifiation </h1>
                        <p>Lorum ipsuLorum ipsuLorum ipsuLorum ipsuLorum ipsu</p>
                        <p>Lorum ipsuLorum ipsuLorum ipsuLorum ipsuLo</p>
                        <p>Lorum ipsuLorum ipsuLorum ipsuLoru</p>
                        <p>Lorum ipsuLorum ipsuLorum </p>
                        <button>Find More</button>
                        </div>
                        <img src={im3} title="image3" alt="color3"/>
                    </div>
                    <div className="slide_item">
                        <div className="h1p-left">
                        <h1>4 Highly Qualified & Experience Faculty </h1>
                        <h1>With Oxford Certifiation </h1>
                        <p>Lorum ipsuLorum ipsuLorum ipsuLorum ipsuLorum ipsu</p>
                        <p>Lorum ipsuLorum ipsuLorum ipsuLorum ipsuLo</p>
                        <p>Lorum ipsuLorum ipsuLorum ipsuLoru</p>
                        <p>Lorum ipsuLorum ipsuLorum </p>
                        <button>Find More</button>
                        </div>
                        <img src={im4} title="image4" alt="color4"/>
                    </div>
                    <div className="slide_item">
                                <div className="h1p">
                        <h1>5 Highly Qualified & Experience Faculty </h1>
                        <h1>With Oxford Certifiation </h1>
                        <p>Lorum ipsuLorum ipsuLorum ipsuLorum ipsuLorum ipsu</p>
                        <p>Lorum ipsuLorum ipsuLorum ipsuLorum ipsuLo</p>
                        <p>Lorum ipsuLorum ipsuLorum ipsuLoru</p>
                        <p>Lorum ipsuLorum ipsuLorum </p>
                        <button>Find More</button>
                        </div>
                        <img src={im5} title="image5" alt="color5"/>
                    </div>
                </div>
                <img className="right_btn" ref={btnRight.ref}  src="https://i.loli.net/2018/12/09/5c0cd5ba634b7.jpg"/>
            </div>
                <div className="slider-icon" ref={icon.ref}>
                    <i className="fas fa-dot-circle fa-2x"></i>
                    <i className="fas fa-dot-circle fa-2x"></i>
                    <i className="fas fa-dot-circle fa-2x"></i>
                    <i className="fas fa-dot-circle fa-2x"></i>
                    <i className="fas fa-dot-circle fa-2x"></i>
                </div>
                
        </div>
        </>
    )
}
export default Slider3;
