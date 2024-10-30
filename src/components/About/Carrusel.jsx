import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, {Component} from "react";
import Slider from "react-slick";
import CarruelItem from "@/components/About/CarruelItem";

function Carrusel() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "530px",
        adaptiveHeight:true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        arrows: false, // Desactiva los botones de navegación
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    return (

        <div className="slider-container mx-[-42px]">
            <Slider {...settings}>

                    <CarruelItem/>

                    <CarruelItem/>

                    <CarruelItem/>

                    <CarruelItem/>

                    <CarruelItem/>
            </Slider>
        </div>
    );
}

export default Carrusel;
