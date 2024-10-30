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
                    icon={'/images/icons/carrusel/iconCarrusel5.svg'}
                    tittle={'Primero'}
                    avatar={'/images/icons/carrusel/avatar5.svg'}
                    name={'Ralph Edwars'}
                    rol={'Harvesting 32KWh '}
                    content={'Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque Mattis pharetra.'}/>

                <CarruelItem
                    icon={'/images/icons/carrusel/iconCarrusel3.svg'}
                    tittle={'Zoomerr'}
                    avatar={'/images/icons/carrusel/avatar3.svg'}
                    name={'Hellen Jummy'}
                    rol={'Team Lead'}
                    content={'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.'}/>

                <CarruelItem
                    icon={'/images/icons/carrusel/iconCarrusel1.svg'}
                    tittle={'SHELLS'}
                    avatar={'/images/icons/carrusel/avatar1.svg'}
                    name={'Hellena John'}
                    rol={'Co-founder'}
                    content={'Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.'}/>

                <CarruelItem
                    icon={'/images/icons/carrusel/iconCarrusel2.svg'}
                    tittle={'ArtVenue'}
                    avatar={'/images/icons/carrusel/avatar2.svg'}
                    name={'David Oshodi'}
                    rol={'Manager'}
                    content={'Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit\n' +
                        '                purus venenatis velit semper lectus sed ornare quam nulla.'}/>

                <CarruelItem
                    icon={'/images/icons/carrusel/iconCarrusel4.svg'}
                    tittle={'WAVES'}
                    avatar={'/images/icons/carrusel/avatar4.svg'}
                    name={'Jane Doe'}
                    rol={'Senior Designer'}
                    content={'Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.'}/>


            </div>
        </div>
    );
};

export default Carousel;