// import MyIcon from '@/public/i'
import Image from "next/image";

export default function Prensentacion() {
    return (

        <>

            <div
                className="z-10 flex flex-col space-y-[32px] py-[48px] px-[16px] lg:flex-row lg:justify-between lg:space-x-20 items-center lg:p-[80px] relative">

                <div className="z-10 flex-col space-y-[32px] items-center text-center lg:text-justify">

                    <h1 className="text-5xl font-bold text-gray-900">Collectible Sneakers</h1>

                    <p className="mt-4 text-gray-700">Sit elit feugiat turpis sed integer integer accumsan
                        turpis. Sed
                        suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.</p>

                    <div className="w-full flex space-x-4 items-center justify-center lg:justify-start">

                        <button
                            className="border-2 border-[#78350F] rounded-[8px] p-3 text-[#78350F] hover:bg-[#78350F] hover:text-white">Sign
                            up now
                        </button>

                        <button className="flex items-center rounded-[8px] text-[#78350F]">
                            <Image
                                src="/images/icons/Vector.svg"
                                alt="Vector"
                                width={24}
                                height={24}
                            />
                            <p className='p-[8px]'> Watch Demo</p>
                        </button>

                    </div>

                </div>

                <div className="z-10 lg:w-full lg:min-w-[486px] lg:max-w-[486px] lg:aspect-[486/423]">
                    <Image
                        src="/images/zapato.svg"
                        alt="Zapato"
                        width={486}
                        height={423}
                    />
                </div>
                    {/*todo ajustar aki que tapa el navbar*/}
                    <Image
                        className='z-0 lg:hidden w-full absolute bottom-0 right-0 mb-0'
                        src={'/images/Triangulo2.svg'}
                        alt={'Triangulo fondo 2'}
                        quality={100}
                        width={500}
                        height={500}
                        objectFit="cover"
                    />
            </div>

            {/*///////////////////////////////////////*/}
            <div
                className="flex flex-col justify-center lg:flex-row items-center gap-[32px] py-[48px] px-[16px] lg:gap-[80px] lg:p-[80px] bg-amber-100 lg:bg-transparent mt-0">

                <div className="z-10 text-center flex flex-col items-center lg:text-justify lg:items-start ">
                    <Image src={'/images/icons/trophy.svg'} alt={'Trofeo'} width={63} height={64}/>
                    <h3 className="mt-4 text-xl font-bold text-gray-900">Nibh viverra</h3>
                    <p className="mt-2 text-gray-700">Sit bibendum donec dolor fames neque vulputate non sit
                        aliquam.
                        Consequat turpis natoque leo, massa.</p>
                </div>
                <div className="z-10 text-center flex flex-col items-center  lg:text-justify lg:items-start">
                    <Image src={'/images/icons/tunnel.svg'} alt={'Loma'} width={63} height={64}/>
                    <h3 className="mt-4 text-xl font-bold text-gray-900">Cursus amet</h3>
                    <p className="mt-2 text-gray-700">Sit bibendum donec dolor fames neque vulputate non sit
                        aliquam.
                        Consequat turpis natoque leo, massa.</p>
                </div>
                <div className="z-10 text-center flex flex-col items-center  lg:text-justify lg:items-start">
                    <Image src={'/images/icons/tv.svg'} alt={'Loma'} width={63} height={64}/>
                    <h3 className="mt-4 text-xl font-bold text-gray-900">Ipsum fermentum</h3>
                    <p className="mt-2 text-gray-700">Sit bibendum donec dolor fames neque vulputate non sit
                        aliquam.
                        Consequat turpis natoque leo, massa.</p>
                </div>


            </div>
        </>

    )
}


