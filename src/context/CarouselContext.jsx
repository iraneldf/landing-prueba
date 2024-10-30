// context/CarouselContext.js
'use client'

import React, {createContext, useContext, useRef} from 'react';
import useEmblaCarousel from "embla-carousel-react";

const CarouselContext = createContext();

export const CarouselProvider = ({children}) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'center', // Alineación central
        slidesToScroll: 1,
    });

    // Funciones para navegar por el carrusel
    const scrollPrev = () => {
        if (emblaApi) emblaApi.scrollPrev();
    };

    const scrollNext = () => {
        if (emblaApi) emblaApi.scrollNext();
    };

    return (
        <CarouselContext.Provider value={{emblaRef, scrollPrev, scrollNext}}>
            {children}
        </CarouselContext.Provider>
    );
};

export const useCarousel = () => {
    return useContext(CarouselContext);
};