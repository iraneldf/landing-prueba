'use client'

import React, {createContext, useContext, useState} from 'react';
import useEmblaCarousel from "embla-carousel-react";

const NavContext = createContext();

export const NavProvider = ({children}) => {
    const [showMenu, setShowMenu] = useState(false)

    const toogleMenu = () => {
        setShowMenu(prev => !prev)
    }

    return (
        <NavContext.Provider value={{showMenu, toogleMenu}}>
            {children}
        </NavContext.Provider>
    );
};

export const useNav = () => {
    return useContext(NavContext);
};