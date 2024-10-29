import {IoArrowForward} from "react-icons/io5";
import Image from "next/image";

export default function Articles() {
    return (
        <div className='flex flex-col gap-[80px] p-[80px] relative'>

            <div className='z-10 flex justify-between items-center'>
                <h1 className='font-bold text-[56px] leading-[61.6px]'>Articles by Collectors</h1>
                <button className='text-[#78350F] flex items-center hover:text-black'>
                    <p className='px-[16px]'>More Articles</p>
                    <IoArrowForward/>
                </button>
            </div>


            <div className='z-10 flex self-center gap-[24px]'>
                {/*tarjeta*/}
                <div style={{boxShadow: '0px 10px 15px -3px #0000001A'}}
                     className='w-[302px] rounded-[10px] border-[1px] border-[#E2E8F0] bg-white overflow-hidden'>

                    <Image src={'/images/card/PictureCard5.svg'} alt={'Card image'} width={302} height={220}/>

                    <div className='flex flex-col pt-[32px] px-[32px]'>
                        <div>
                            <p className='mb-[4px] text-[#0F172A] text-[24px] font-[700] leading-[26.4px]'>Congue velit risus</p>
                            <p className='flex text-[#0F172A] flex-wrap text-wrap text-[18px] font-[200] leading-[28.8px] max-w-full'>
                                Nunc gravida semper tellus neque
                                scelerisque eget tincidunt in.
                            </p>
                        </div>
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

        </div>
    );
}
