import Carousel from "@/components/About/Carrusel2";
import CarruselControls from "@/components/About/CarruselControls";

// import dynamic from 'next/dynamic';
//
// const Carrusel = dynamic(() => import("@/components/About/Carrusel"), {ssr: false});

export default function About() {

    return (
        <div className="flex flex-col gap-[32px] lg:gap-[80px] py-[48px] px-[16px] lg:py-[160px] lg:px-[80px] lg:bg-[#FFFBEB] relative overflow-auto">

            <div className='flex gap-[48px] justify-center lg:justify-between'>

                <h1 className='font-bold leading-[61.6px]  text-[32px] lg:text-[56px]'>Because they love us</h1>

                <CarruselControls/>
            </div>

            <div className='absolute top-[125px] lg:top-[260px] self-center bg-[#FDE68A] w-full lg:w-[calc(100%-40px)] h-[277px] lg:h-[421px]'/>
            <Carousel/>

        </div>


    );
}
