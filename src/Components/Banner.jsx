import React, { useState } from 'react'
import bannerImage from '../assets/bannerImage.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"



const Banner = () => {
    const [dots, setActiveDots] = useState(0)

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "none", background: "red" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "none", background: "green" }}
            onClick={onClick}
          />
        );
      }


    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        beforeChange: (prev, next) => {
            setActiveDots(next);
        },

        appendDots: dots => (
            <div
                style={{
                    backgroundColor: "	#transparent",
                    borderRadius: "10px",
                    padding: "10px",
                    position: 'absolute',
                    top: '27%',
                    left: '160px',
                    width: '30px'



                }}
            >
                <ul>
                    {dots.map((item, index) => {
                        return (
                            <li key={index}
                                style={{
                                    display: 'block',
                                    paddingTop: '60px',


                                }}>{item.props.children}</li>
                        );
                    })}
                </ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={
                    i == dots ? {
                        height: '60px',
                        width: "40px",
                        color: "black",
                        borderRight: "2px black solid",
                        padding: '5px'
                    } : {
                        height: '60px',
                        width: "40px",
                        color: "transparent",
                        borderRight: "2px #fff solid",
                        padding: '5px'
                    }


                }
            >
                0{i + 1}
            </div>
        )
    };
    return (

        <div className="max-w-container2 mx-auto">
            <Slider {...settings}>
                <div>
                    <div>
                        <img src={bannerImage} alt="" />
                    </div>
                </div>
                <div>
                    <div>
                        <img src={bannerImage} alt="" />
                    </div>
                </div>
                <div>
                    <div>
                        <img src={bannerImage} alt="" />
                    </div>
                </div>

            </Slider>
        </div>
    );


}

export default Banner