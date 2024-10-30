import {IoArrowForward} from "react-icons/io5";
import Image from "next/image";

export default function Amazing() {
    return (<div className='relative'>

        <div className='flex flex-col gap-[32px] lg:gap-[80px] py-[48px] px-[16px] lg:p-[80px] bg-[#FEF3C7] relative'>

            <div
                className='z-10 flex flex-col gap-[8px] text-center items-center lg:flex-row justify-between'>
                <h1 className='font-bold text-[32px] leading-[32.5px]
                        lg:text-[56px]
                        lg:leading-[61.6px]'
                >Amazing events</h1>

                <button className='text-[#78350F] py-[12px] flex items-center hover:text-black'>
                    <p className='px-[16px]'>Explore Articles</p>
                    <IoArrowForward/>
                </button>
            </div>

            <div className='z-10 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 self-center gap-[24px]'>
                {/*tarjeta*/}
                <div style={{boxShadow: '0px 10px 15px -3px #0000001A'}}
                     className='rounded-[10px] bg-white transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg'>

                    <div className=' flex flex-col gap-[16px] pt-[24px] px-[16px]'>
                        <div>
                            <p className='mb-[4px] text-[16px] text-[#0F172A] font-[500] leading-[17.6px]'>Ipsum</p>
                            <p className='text-[#0F172A] text-[24px] font-[700] leading-[26.4px]'>Varius est
                                diam</p>
                        </div>

                        <Image src={'/images/card/PictureCard1.svg'} alt={'Card image'} width={270} height={220}/>
                    </div>

                    <div className='p-[16px]'>
                        <button className='py-[12px] pr-[8px] text-[#78350F] flex items-center hover:text-black'>
                            <p className='pr-[16px]'> Buy Tickets</p>
                            <IoArrowForward/>
                        </button>
                    </div>

                </div>
                {/*tarjeta*/}

                {/*tarjeta*/}
                <div style={{boxShadow: '0px 10px 15px -3px #0000001A'}}
                     className='rounded-[10px] bg-white transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg'>

                    <div className=' flex flex-col gap-[16px] pt-[24px] px-[16px]'>
                        <div>
                            <p className='mb-[4px] text-[16px]  text-[#0F172A] font-[500] leading-[17.6px]'>Purus</p>
                            <p className='text-[#0F172A] text-[24px] font-[700] leading-[26.4px]'>Diam felis
                                tempus</p>
                        </div>

                        <Image src={'/images/card/PictureCard2.svg'} alt={'Card image'} width={270} height={220}/>
                    </div>

                    <div className='p-[16px]'>
                        <button className='py-[12px] pr-[8px] text-[#78350F] flex items-center hover:text-black'>
                            <p className='pr-[16px]'> Buy Tickets</p>
                            <IoArrowForward/>
                        </button>
                    </div>

                </div>
                {/*tarjeta*/}

                {/*tarjeta*/}
                <div style={{boxShadow: '0px 10px 15px -3px #0000001A'}}
                     className='rounded-[10px] bg-white transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg'>

                    <div className=' flex flex-col gap-[16px] pt-[24px] px-[16px]'>
                        <div>
                            <p className='mb-[4px] text-[16px] text-[#0F172A] font-[500] leading-[17.6px]'>Urna</p>
                            <p className='text-[#0F172A] text-[24px] font-[700] leading-[26.4px]'>Vel nulla
                                varius</p>
                        </div>

                        <Image src={'/images/card/PictureCard3.svg'} alt={'Card image'} width={270} height={220}/>
                    </div>

                    <div className='p-[16px]'>
                        <button className='py-[12px] pr-[8px] text-[#78350F] flex items-center hover:text-black'>
                            <p className='pr-[16px]'> Buy Tickets</p>
                            <IoArrowForward/>
                        </button>
                    </div>

                </div>
                {/*tarjeta*/}

                {/*tarjeta*/}
                <div style={{boxShadow: '0px 10px 15px -3px #0000001A'}}
                     className='rounded-[10px] bg-white transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg'>

                    <div className=' flex flex-col gap-[16px] pt-[24px] px-[16px]'>
                        <div>
                            <p className='mb-[4px] text-[16px] text-[#0F172A] font-[500] leading-[17.6px]'>Vitae</p>
                            <p className='text-[#0F172A] text-[24px] font-[700] leading-[26.4px]'>Amet tristique
                                a</p>
                        </div>

                        <Image src={'/images/card/PictureCard4.svg'} alt={'Card image'} width={270} height={220}/>
                    </div>

                    <div className='p-[16px]'>
                        <button className='py-[12px] pr-[8px] text-[#78350F] flex items-center hover:text-black'>
                            <p className='pr-[16px]'> Buy Tickets</p>
                            <IoArrowForward/>
                        </button>
                    </div>

                </div>
                {/*tarjeta*/}

            </div>


            <Image className='w-full absolute bottom-[-2px] left-0 right-0' src={'/images/card/FondoCard.svg'}
                   alt={'Fondo cards'} width={600} height={400}/>
        </div>


        <div
            className='bg-[#0F172A] items-center flex flex-col text-center lg:flex-row justify-between text-white gap-[32px] lg:gap-[80px] py-[48px] px-[16px] lg:p-[80px]'>
            <h2 className='text-[40px] lg:text-[56px] font-bold leading-[61.6px]'>Collect More Sneakers Today</h2>

            <button
                className="text-[24px] font-[700] leading-[24px] tracking-[0.5px] px-[24px] py-[20px] w-[233px] rounded-[8px] border-[2px] border-white text-white hover:bg-white hover:text-[#0B1120]">
                Sign up now
            </button>
        </div>

        <Image className='z-10 hidden lg:block absolute bottom-[47px] right-0' src={'/images/AmazingBacklights.svg'} alt={'Backlights'} width={256} height={285}/>
    </div>);
}
