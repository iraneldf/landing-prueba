'use client'
// components/Carousel.js


import React from 'react';
import CarruelItem from "@/components/About/CarruelItem";
import {useCarousel} from "@/context/CarouselContext";

const Carousel = () => {
    const {emblaRef} = useCarousel();

    return (
        <div className="embla pb-1" ref={emblaRef}>
            <div className="embla__container">

                <CarruelItem
                    icon={'/images/icons/carrusel/iconCarrusel1.svg'}
                    tittle={'Primero'}
                    avatar={'/images/icons/carrusel/avatar1.svg'}
                    name={'Hellena John'}
                    rol={'Co-founder'}
                    content={'Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit\n' +
                        '                purus venenatis velit semper lectus sed ornare quam nulla.'}/>

                <CarruelItem
                    icon={'/images/icons/carrusel/iconCarrusel1.svg'}
                    tittle={'SHELLS'}
                    avatar={'/images/icons/carrusel/avatar1.svg'}
                    name={'Hellena John'}
                    rol={'Co-founder'}
                    content={'Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit\n' +
                        '                purus venenatis velit semper lectus sed ornare quam nulla.'}/>

                <CarruelItem
                    icon={'/images/icons/carrusel/iconCarrusel1.svg'}
                    tittle={'SHELLS'}
                    avatar={'/images/icons/carrusel/avatar1.svg'}
                    name={'Hellena John'}
                    rol={'Co-founder'}
                    content={'Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit\n' +
                        '                purus venenatis velit semper lectus sed ornare quam nulla.'}/>

                <CarruelItem
                    icon={'/images/icons/carrusel/iconCarrusel1.svg'}
                    tittle={'SHELLS'}
                    avatar={'/images/icons/carrusel/avatar1.svg'}
                    name={'Hellena John'}
                    rol={'Co-founder'}
                    content={'Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit\n' +
                        '                purus venenatis velit semper lectus sed ornare quam nulla.'}/>

                <CarruelItem
                    icon={'/images/icons/carrusel/iconCarrusel1.svg'}
                    tittle={'Ultimo'}
                    avatar={'/images/icons/carrusel/avatar1.svg'}
                    name={'Hellena John'}
                    rol={'Co-founder'}
                    content={'Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit\n' +
                        '                purus venenatis velit semper lectus sed ornare quam nulla.'}/>


            </div>
        </div>
    );
};

export default Carousel;