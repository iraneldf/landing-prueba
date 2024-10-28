import Image from "next/image";
import NavBar from "@/components/NavBar";
import Prensentacion from "@/components/Prensentacion";
import Gallery from "@/components/Gallery";

export default function Home() {
    return (
        <div className='flex flex-col sm:bg-gradient-to-b sm:from-amber-50 sm:to-white '>
            <NavBar/>
            <div className='flex flex-col relative'>

                <Prensentacion/>

                <Image
                    className='absolute lg:block hidden bottom-0 right-0'
                    src={'/images/Rectangle 31.svg'}
                    alt={'Triangulo fondo'}
                    quality={100}
                    width={1428}
                    height={806}
                />
            </div>

            <Gallery/>

            <div className="py-[160px] px-[80px] bg-gradient-to-b from-amber-50 to-white">
                <div className="bg-white rounded-lg shadow-lg p-8 flex items-center space-x-8 relative">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Why join us</h1>
                        <ul className="space-y-2">
                            <li className="flex items-center text-gray-700">
                                <i className="fas fa-check text-green-500 mr-2"></i>
                                Est et in pharetra magna adipiscing ornare aliquam.
                            </li>
                            <li className="flex items-center text-gray-700">
                                <i className="fas fa-check text-green-500 mr-2"></i>
                                Tellus arcu sed consequat ac velit ut eu blandit.
                            </li>
                            <li className="flex items-center text-gray-700">
                                <i className="fas fa-check text-green-500 mr-2"></i>
                                Ullamcorper ornare in et egestas dolor orci.
                            </li>
                        </ul>
                        <button
                            className="mt-6 px-6 py-2 border border-orange-600 text-orange-600 rounded hover:bg-orange-600 hover:text-white transition">
                            Sign up now
                        </button>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div
                                className="bg-yellow-400 w-40 h-40 transform rotate-45 -translate-x-10 -translate-y-10"></div>
                            <div
                                className="bg-pink-500 w-32 h-32 transform rotate-45 translate-x-20 translate-y-20"></div>
                            <div
                                className="bg-blue-500 w-8 h-8 transform rotate-45 -translate-x-20 translate-y-20"></div>
                        </div>
                        <div className="relative z-10">
                            <img src="https://placehold.co/300x200" alt="People running in a marathon"
                                 className="rounded-lg shadow-lg"/>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <i className="fas fa-play text-white text-4xl"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
