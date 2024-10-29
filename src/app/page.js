import Image from "next/image";
import NavBar from "@/components/NavBar";
import Prensentacion from "@/components/Prensentacion";
import Gallery from "@/components/Gallery";
import Frame3 from "@/components/Frame3";
import About from "@/components/About";

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

            <Frame3/>

            <About/>


        </div>
    );
}
