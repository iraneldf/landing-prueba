import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

function Carrusel() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };
    return (
        <div className="h-full">
            <Slider {...settings}>

                <div className='bg-white flex flex-col gap-[16px] rounded-[20px] p-[32] mx-11 w-[320px]'>
                    <h1 className='text-[#475569]'>SHELLS</h1>
                    <p>Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis
                        velit semper lectus sed ornare quam nulla.</p>
                    <span>Hellena John</span>
                </div>

                <div className='bg-white flex flex-col gap-[16px] rounded-[20px] p-[32] mx-11 w-[320px]'>
                    <h1 className='text-[#475569]'>SHELLS</h1>
                    <p>Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis
                        velit semper lectus sed ornare quam nulla.</p>
                    <span>Hellena John</span>
                </div>

                <div className='bg-white flex flex-col gap-[16px] rounded-[20px] p-[32] mx-11 w-[320px]'>
                    <h1 className='text-[#475569]'>SHELLS</h1>
                    <p>Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis
                        velit semper lectus sed ornare quam nulla.</p>
                    <span>Hellena John</span>
                </div>

                <div className='bg-white flex flex-col gap-[16px] rounded-[20px] p-[32] mx-11 w-[320px]'>
                    <h1 className='text-[#475569]'>SHELLS</h1>
                    <p>Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis
                        velit semper lectus sed ornare quam nulla.</p>
                    <span>Hellena John</span>
                </div>

            </Slider>
        </div>
    );
}

export default Carrusel;
