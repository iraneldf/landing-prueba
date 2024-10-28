// import MyIcon from '@/public/i'
import Image from "next/image";

export default function Prensentacion() {
    return (

        <>

            <div className="flex flex-col space-y-[32px] py-[48px] px-[16px] lg:flex-row lg:justify-between lg:space-x-20 items-center lg:p-[80px]">

                <div className="flex-col space-y-[32px] items-center text-center lg:text-justify  border-amber-950 border-8">

                    <h1 className="text-5xl font-bold text-gray-900">Collectible Sneakers</h1>

                    <p className="mt-4 text-gray-700">Sit elit feugiat turpis sed integer integer accumsan
                        turpis. Sed
                        suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.</p>

                    <div className="flex space-x-4">

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

                <div className="lg:w-full lg:min-w-[486px] lg:max-w-[486px] lg:aspect-[486/423]  border-amber-950 border-8">
                    <Image
                        src="/images/zapato.svg"
                        alt="Zapato"
                        width={486}
                        height={423}
                    />
                </div>

            </div>

            {/*///////////////////////////////////////*/}
            <div className="flex flex-col justify-center lg:flex-row items-center gap-[80px] p-[80px] ">

                <div className="text-center flex flex-col items-center">
                    <Image src={'/images/icons/loma.png'} alt={'Loma'} width={63} height={64}/>
                    <h3 className="mt-4 text-xl font-bold text-gray-900">Nibh viverra</h3>
                    <p className="mt-2 text-gray-700">Sit bibendum donec dolor fames neque vulputate non sit
                        aliquam.
                        Consequat turpis natoque leo, massa.</p>
                </div>
                <div className="text-center flex flex-col items-center">
                    <Image src={'/images/icons/loma.png'} alt={'Loma'} width={63} height={64}/>
                    <h3 className="mt-4 text-xl font-bold text-gray-900">Cursus amet</h3>
                    <p className="mt-2 text-gray-700">Sit bibendum donec dolor fames neque vulputate non sit
                        aliquam.
                        Consequat turpis natoque leo, massa.</p>
                </div>
                <div className="text-center flex flex-col items-center">
                    <Image src={'/images/icons/loma.png'} alt={'Loma'} width={63} height={64}/>
                    <h3 className="mt-4 text-xl font-bold text-gray-900">Ipsum fermentum</h3>
                    <p className="mt-2 text-gray-700">Sit bibendum donec dolor fames neque vulputate non sit
                        aliquam.
                        Consequat turpis natoque leo, massa.</p>
                </div>

            </div>
        </>

    )
}


