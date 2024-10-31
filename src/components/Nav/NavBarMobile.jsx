'use client'
import {useNav} from "@/context/NavContext";
import Link from "next/link";

const NavBarMobile = () => {
    const {showMenu} = useNav()
    return (
        <nav id="menuList"
             className={`
             ${showMenu ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 '} transition-all duration-300 ease-in-out
             z-30 py-3 absolute top-0 items-center space-x-6 text-[#78350F] w-full  lg:hidden
             left-1/2 transform -translate-x-1/2  bg-gradient-to-b from-amber-50 shadow-xl to-white 
             `}>
            <div className='flex flex-col gap-7 w-full items-center'>

                <Link href="post/" className="hover:underline">Products</Link>
                <Link href="post/" className="hover:underline">Solutions</Link>
                <Link href="post/" className="hover:underline">Pricing</Link>
                <Link href="post/" className="hover:underline">Resources</Link>
                <Link href="post/" className="hover:underline">Log In</Link>
                <Link href="post/"
                      className="border-2 border-[#78350F] px-4 py-2 rounded hover:bg-[#78350F] hover:text-white">Sign
                    up now</Link>
            </div>
        </nav>)

}

export default NavBarMobile;
