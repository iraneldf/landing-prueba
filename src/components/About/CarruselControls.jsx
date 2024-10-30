'use client'
// components/CarouselControls.js

import React from 'react';
import {IoArrowBack, IoArrowForward} from "react-icons/io5";
import {useCarousel} from "@/context/CarouselContext";

const CarouselControls = () => {
    const {scrollPrev, scrollNext} = useCarousel(); // Obtener las funciones del contexto

    return (
        <div className='lg:flex gap-[24px] hidden '>
            <button
                onClick={scrollPrev}
                className="flex items-center justify-center w-[48px] h-[48px] bg-transparent text-[#78350F] rounded-full border-2 border-[#78350F] transition-transform duration-300 ease-in-out hover:bg-[#78350F] hover:text-white hover:shadow-lg">
                <IoArrowBack className='w-[24px] h-[24px]'/>
            </button>
            <button
                onClick={scrollNext}
                className="flex items-center justify-center w-[48px] h-[48px] bg-transparent text-[#78350F] rounded-full border-2 border-[#78350F] transition-transform duration-300 ease-in-out hover:bg-[#78350F] hover:text-white hover:shadow-lg">
                <IoArrowForward className='w-[24px] h-[24px]'/>
            </button>

        </div>
    );
};

export default CarouselControls;
