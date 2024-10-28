// components/Navbar.js

import Image from "next/image";

const Navbar = () => {
    return (
<>

        <header className="flex justify-between items-center p-[16px] lg:px-[80px] lg:py-[24px] z-10">
            <div className="text-2xl font-bold text-[#78350F]">Collers</div>
            <nav className="space-x-6 text-[#78350F] hidden lg:block">
                <a href="#" className="hover:underline">Products</a>
                <a href="#" className="hover:underline">Solutions</a>
                <a href="#" className="hover:underline">Pricing</a>
                <a href="#" className="hover:underline">Resources</a>
                <a href="#" className="hover:underline">Log In</a>
                <a href="#"
                   className="border-2 border-[#78350F] px-4 py-2 rounded hover:bg-[#78350F] hover:text-white">Sign
                    up now</a>
            </nav>
            {/*todo ajustar aki que se tapa con el triangulo*/}
            <Image
                className='lg:hidden sm:z-30'
                src={'/images/menu-scale.svg'}
                alt={'Menu'}
                width={24}
                height={24}/>


        </header>



</>
    )

};

export default Navbar;