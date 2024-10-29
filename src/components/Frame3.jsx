import Image from "next/image";

export default function Frame3() {
    return (
        <div className="px-[16px] pt-[16px] pb-[56px] xl:py-[160px] md:px-[80px] bg-white lg:bg-[#FFFBEB] relative">

            <div style={{boxShadow: '0px 20px 25px -5px rgba(0, 0, 0, 0.1)'}}
                 className="bg-white xl:h-[496px] rounded-[30px] flex flex-col xl:flex-row justify-between items-center py-[32px] px[16px] gap-[32px] xl:gap-[80px] xl:p-[80px]">

                <div className='flex flex-col gap-[24px] items-center xl:items-start'>

                    <h1 className="font-roboto text-[56px] font-[800] leading-[61.6px]">Why join us</h1>

                    <ul className="z-10 space-y-2">

                        <li className="flex items-center justify-center">
                            <Image className={'mr-[13.44px]'} src={'/images/icons/Check.svg'} alt={'Ckeck'}
                                   width={13.33} height={9.05}/>

                            Est et in pharetra magna
                            adipiscing ornare aliquam.

                        </li>

                        <li className="flex items-center text-gray-700">
                            <Image className={'mr-[13.44px]'} src={'/images/icons/Check.svg'} alt={'Ckeck'}
                                   width={13.33} height={9.05}/>
                            Tellus arcu sed consequat ac velit ut eu blandit.
                        </li>
                        <li className="flex items-center text-gray-700">
                            <Image className={'mr-[13.44px]'} src={'/images/icons/Check.svg'} alt={'Ckeck'}
                                   width={13.33} height={9.05}/>
                            Ullamcorper ornare in et egestas dolor orci.
                        </li>
                    </ul>

                    <button
                        className="z-10 px-6 py-2 border-2 border-[#78350F] text-[#78350F] rounded-[8px] hover:bg-[#78350F] hover:text-white transition">
                        Sign up now
                    </button>
                </div>

                <div className=" z-10">
                    <Image src={'/images/Desktop.svg'} alt={"Desktop"} width={520} height={350}/>
                </div>

            </div>

            <Image className='absolute top-[109px] right-24 bottom-20 w-[640.24px] hidden xl:block'
                   src={'/images/Deco-video.svg'}
                   alt={"Decoracion"}
                   width={713}
                   height={625.24}/>

            <Image className='w-full absolute top-[170px] left-0 right-0  h-[520px] xl:hidden'
                   src={'/images/Deco-video.svg'}
                   alt={"Decoracion responsivo"}
                   width={713}
                   height={625.24}/>

            <div className='
            z-20
            absolute
            top-[503px]
            right-[515px]
            w-[85px]
            h-[86px]
            xl:block
            hidden
            rounded-[50px]
            bg-[#15803D]
            opacity-[0.75]'/>
        </div>


    );
}
