// import MyIcon from '@/public/i'
import Image from "next/image";
import NavBarMobile from "@/components/Nav/NavBarMobile";

export default function Prensentacion() {
    return (

        <div className='flex flex-col relative'>

            <NavBarMobile/>

            <div
                className="overflow-hidden z-20 flex flex-col space-y-[32px] py-[48px] px-[16px] lg:flex-row lg:justify-between lg:space-x-20 items-center lg:p-[80px] relative">

                <div className="z-10 flex-col space-y-[32px] items-center text-center lg:text-justify">

                    <h1 className="text-5xl font-bold text-gray-900">Collectible Sneakers</h1>

                    <p className="mt-4 text-gray-700">Sit elit feugiat turpis sed integer integer accumsan
                        turpis. Sed
                        suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.</p>

                    <div className="w-full flex space-x-4 items-center justify-center lg:justify-start">

                        <button
                            className="border-2 border-[#78350F] rounded-[8px] p-3 text-[#78350F] hover:bg-[#78350F] hover:text-white">
                            <p className='px-[16px]'>Sign up now</p>
                        </button>

                        <button className="z-20 flex items-center rounded-[8px] text-[#78350F]">
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

                <div className="z-10 text-center flex flex-col items-center lg:text-justify lg:items-start">

                    <div className={'relative'}>
                        <Image src={'/images/icons/trophy.svg'} alt={'Trofeo'} width={63} height={64}/>
                        <Image src={'/images/icons/presentation/Figura1.svg'} className={'absolute top-0 left-[27px]'} alt={'fugira1'} width={63} height={64}/>
                    </div>

                    <h3 className="mt-4 text-xl font-bold text-gray-900">Nibh viverra</h3>
                    <p className="mt-2 text-gray-700">Sit bibendum donec dolor fames neque vulputate non sit
                        aliquam.
                        Consequat turpis natoque leo, massa.</p>
                </div>
                <div className="z-10 text-center flex flex-col items-center  lg:text-justify lg:items-start">

                    <div className={'relative'}>
                        <Image src={'/images/icons/tunnel.svg'} alt={'Loma'} width={63} height={64}/>
                        <Image src={'/images/icons/presentation/Figura2.svg'} className={'absolute top-[-12px] left-[27px] size-[54px] w-[54px] h-[54px]'}
                               alt={'fugira2'} width={53} height={53}/>
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-gray-900">Cursus amet</h3>
                    <p className="mt-2  text-gray-700">Sit bibendum donec dolor fames neque vulputate non sit
                        aliquam.
                        Consequat turpis natoque leo, massa.</p>
                </div>
                <div className="z-10 text-center flex flex-col items-center  lg:text-justify lg:items-start">
                    <div className={'relative'}>
                        <Image src={'/images/icons/tv.svg'} alt={'Loma'} width={63} height={64}/>
                        <Image src={'/images/icons/presentation/Figura3.svg'}
                               className={'absolute top-[-6px] left-[42px] size-[54px] w-[54px] h-[54px]'}
                               alt={'fugira2'} width={53} height={53}/>
                    </div>

                    <h3 className="mt-4 text-xl font-bold text-gray-900">Ipsum fermentum</h3>
                    <p className="mt-2 text-gray-700">Sit bibendum donec dolor fames neque vulputate non sit
                        aliquam.
                        Consequat turpis natoque leo, massa.</p>
                </div>


            </div>

            <Image
                className='z-0 self-end absolute bottom-0 right-0'
                src={'/images/Rectangle 31.svg'}
                alt={'Triangulo fondo'}
                quality={100}
                width={1428}
                height={806}
            />

        </div>
    )
}


