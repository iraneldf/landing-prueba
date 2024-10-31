'use client'
// components/Navbar.js

import Image from "next/image";
import {useNav} from "@/context/NavContext";
import Link from "next/link";

const Navbar = () => {

    const {showMenu, toogleMenu} = useNav()

    return (
        <header className="z-20 flex justify-between items-center p-[16px] lg:px-[80px] lg:py-[24px] ">

            <div className="text-2xl font-bold text-[#78350F]">Collers</div>

            <nav className="space-x-6 text-[#78350F] hidden lg:block">
                <Link href="post/" className="hover:underline">Products</Link>
                <Link href="post/"  className="hover:underline">Solutions</Link>
                <Link href="post/"  className="hover:underline">Pricing</Link>
                <Link href="post/"  className="hover:underline">Resources</Link>
                <Link href="post/"  className="hover:underline">Log In</Link>
                <Link href="post/"
                      className="border-2 border-[#78350F] px-4 py-2 rounded hover:bg-[#78350F] hover:text-white">Sign
                    up now</Link>
            </nav>

            <button
                onClick={toogleMenu}
                aria-haspopup="true" // Indica que este botón controla un menú
                aria-expanded={showMenu} // Estado del menú
                aria-controls="menuList" // ID del menú controlado
                className={`lg:hidden sm:z-30 rounded-[8px] text-[#78350F]  px-1.5 hover:border-2 hover:border-[#78350F]
                 ${showMenu && 'border-2  border-[#78350F]'}`}>
                <Image
                    className='lg:hidden sm:z-30 z-30'
                    src={'/images/menu-scale.svg'}
                    alt={'Menu'}
                    width={24}
                    height={24}/>
            </button>

        </header>
    )

};

export default Navbar;