import React from 'react'
import img1 from '../../images/img1.jpg'
import img2 from '../../images/imgg.jpg'
import img3 from '../../images/img1.jpg'
import img4 from '../../images/imgg.jpg'

const Sliderss = () => {

    return (
        <div className="wrapper">
            <div className="image-area">
                <div className="single-img image-1"><img src={img1} alt=" "/></div>
            </div>
            <div className="image-area">
                <div className="single-img image-2"><img src={img2} alt=" "/></div>
            </div>
            <div className="image-area">
                <div className="single-img image-3"><img src={img3} alt=" "/></div>
            </div>
            <div className="image-area">
                <div className="single-img image-4"><img src={img4} alt=" "/></div>
            </div>
            <div className="image-area">
                <div className="single-img image-5"><img src={img4} alt=" "/></div>
            </div>
        </div>
    )
}
export default Sliderss
