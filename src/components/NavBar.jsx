// components/Navbar.js

const Navbar = () => {
    return (

            <header className="flex justify-between items-center h-[96px] px-[80px] py-[24px] ">
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
            </header>


    )

};

export default Navbar;