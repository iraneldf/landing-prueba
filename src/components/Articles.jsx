import {IoArrowForward} from "react-icons/io5";
import Image from "next/image";

export default function Articles() {
    return (
        <div className='flex flex-col gap-[32px] lg:gap-[80px] py-[48px] px-[16px] lg:p-[80px] relative'>

            <div className='z-10 flex flex-col gap-[8px] text-center items-center lg:flex-row justify-between'>
                <h1 className='font-bold text-[32px] leading-[32.5px] lg:text-[56px] lg:leading-[61.6px]'>Articles by Collectors</h1>

                <button className='text-[#78350F] py-[12px] flex items-center hover:text-black'>
                    <p className='px-[16px]'>More Articles</p>
                    <IoArrowForward/>
                </button>
            </div>


            <div className='z-10 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  self-center gap-[24px]'>
                {/*tarjeta*/}
                <div style={{boxShadow: '0px 10px 15px -3px #0000001A'}}
                     className='max-w-[302px] rounded-[10px] border-[1px] border-[#E2E8F0] bg-white overflow-hidden
                     transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg
                     '>

                    <Image src={'/images/card/PictureCard5.svg'} alt={'Card image'} width={302} height={220}/>

                    <div className='flex flex-col pt-[32px] px-[32px]'>
                        <div>
                            <p className='mb-[4px] text-[#0F172A] text-[24px] font-[700] leading-[26.4px]'>Congue velit
                                risus</p>
                            <p className='flex text-[#0F172A] flex-wrap text-wrap text-[18px] font-[200] leading-[28.8px] max-w-full'>
                                Nunc gravida semper tellus neque
                                scelerisque eget tincidunt in.
                            </p>
                        </div>
                    </div>

                    <div className='py-[16px] px-[32px]'>
                        <button className='py-[12px] text-[#78350F] flex items-center hover:text-black'>
                            <p className='pr-[16px]'>Read article</p>
                            <IoArrowForward/>
                        </button>
                    </div>

                </div>
                {/*tarjeta*/}

                {/*tarjeta*/}
                <div style={{boxShadow: '0px 10px 15px -3px #0000001A'}}
                     className='max-w-[302px] rounded-[10px] border-[1px] border-[#E2E8F0] bg-white overflow-hidden
                     transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg
                     '>

                    <Image src={'/images/card/PictureCard6.svg'} alt={'Card image'} width={302} height={220}/>

                    <div className='flex flex-col pt-[32px] px-[32px]'>
                        <div>
                            <p className='mb-[4px] text-[#0F172A] text-[24px] font-[700] leading-[26.4px]'>Congue velit
                                risus</p>
                            <p className='flex text-[#0F172A] flex-wrap text-wrap text-[18px] font-[200] leading-[28.8px] max-w-full'>
                                Nunc gravida semper tellus neque
                                scelerisque eget tincidunt in.
                            </p>
                        </div>
                    </div>

                    <div className='py-[16px] px-[32px]'>
                        <button className='py-[12px] text-[#78350F] flex items-center hover:text-black'>
                            <p className='pr-[16px]'>Read article</p>
                            <IoArrowForward/>
                        </button>
                    </div>

                </div>
                {/*tarjeta*/}

                {/*tarjeta*/}
                <div style={{boxShadow: '0px 10px 15px -3px #0000001A'}}
                     className='max-w-[302px] rounded-[10px] border-[1px] border-[#E2E8F0] bg-white overflow-hidden
                     transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg
                     '>

                    <Image src={'/images/card/PictureCard7.svg'} alt={'Card image'} width={302} height={220}/>

                    <div className='flex flex-col pt-[32px] px-[32px]'>
                        <div>
                            <p className='mb-[4px] text-[#0F172A] text-[24px] font-[700] leading-[26.4px]'>Congue velit
                                risus</p>
                            <p className='flex text-[#0F172A] flex-wrap text-wrap text-[18px] font-[200] leading-[28.8px] max-w-full'>
                                Nunc gravida semper tellus neque
                                scelerisque eget tincidunt in.
                            </p>
                        </div>
                    </div>

                    <div className='py-[16px] px-[32px]'>
                        <button className='py-[12px] text-[#78350F] flex items-center hover:text-black'>
                            <p className='pr-[16px]'>Read article</p>
                            <IoArrowForward/>
                        </button>
                    </div>

                </div>
                {/*tarjeta*/}

                {/*tarjeta*/}
                <div style={{boxShadow: '0px 10px 15px -3px #0000001A'}}
                     className='max-w-[302px] rounded-[10px] border-[1px] border-[#E2E8F0] bg-white overflow-hidden
                     transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg
                     '>

                    <Image src={'/images/card/PictureCard8.svg'} alt={'Card image'} width={302} height={220}/>

                    <div className='flex flex-col pt-[32px] px-[32px]'>
                        <div>
                            <p className='mb-[4px] text-[#0F172A] text-[24px] font-[700] leading-[26.4px]'>Congue velit
                                risus</p>
                            <p className='flex text-[#0F172A] flex-wrap text-wrap text-[18px] font-[200] leading-[28.8px] max-w-full'>
                                Nunc gravida semper tellus neque
                                scelerisque eget tincidunt in.
                            </p>
                        </div>
                    </div>

                    <div className='py-[16px] px-[32px]'>
                        <button className='py-[12px] text-[#78350F] flex items-center hover:text-black'>
                            <p className='pr-[16px]'>Read article</p>
                            <IoArrowForward/>
                        </button>
                    </div>

                </div>
                {/*tarjeta*/}


            </div>

            <Image className='w-full absolute bottom-0 left-0 right-0' src={'/images/card/FondoCard2.svg'}
                   alt={'Fondo cards'} width={600} height={400}/>

        </div>
    );
}
