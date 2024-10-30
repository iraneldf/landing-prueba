import {IoArrowForward} from "react-icons/io5";
import Image from "next/image";

export default function Grow() {
    return (
        <div
            className=" pt-[48px] px-[16px] pb-[96px] xl:px-[80px] xl:pt-[80px] xl:pb-[128px] lg:bg-[#FFFBEB] w-[1,440px] flex flex-col gap-[32px] xl:gap-[80px] relative">

            <div className='z-10 flex flex-col gap-[32px] xl:text-left text-center '>
                <h1 className='text-[32px] lg:text-[56px] font-bold leading-[61.6px]'>Grow your collection</h1>
                <p className='text-[18px] text-center lg:text-left leading-[18px]'>Enim neque massa porta adipiscing elit. Sem libero id faucibus
                    nibh amet dictum pellentesque sed. Eu
                    non turpis risus odio sapien, fames sit rhoncus.
                    Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam
                    tellus.</p>
            </div>

            {/*Menu vista movil*/}
            <div className='overflow-auto xl:hidden relative z-10 flex justify-start items-center p-1 gap-[16px]'>

                <div className='flex gap-[16px] self-start whitespace-nowrap'>
                    {/*box-shadow: 0px 0px 4px 0px #00000012;*/}
                    <button
                        // style={{boxShadow: '4px 4px 6px -1px #0000001A'}}
                        className='items-center text-[20px] shadow-md flex bg-white rounded-[8px] p-[16px]'>
                        <Image src={'/images/icons/search.svg'} alt={'cohete'} width={24} height={24}/>
                        <p className='px-[16px]'> Bibendum tellus</p>
                    </button>

                    <button
                        className='group items-center text-[20px] justify-between hover:shadow-md flex hover:bg-white rounded-[8px] p-[16px]'>
                        <div className='items-center flex'>
                            <Image src={'/images/icons/shield.svg'} alt={'cohete'} width={24} height={24}/>
                            <p className='px-[16px]'>Cras eget</p>
                        </div>
                        <IoArrowForward
                            className='invisible xl:group-hover:visible'/> {/* Icono oculto por defecto */}
                    </button>

                    <button
                        className='group items-center text-[20px] justify-between hover:shadow-md flex hover:bg-white rounded-[8px] p-[16px]'>
                        <div className='items-center flex'>
                            <Image src={'/images/icons/rocket.svg'} alt={'cohete'} width={24} height={24}/>
                            <p className='px-[16px]'>Dolor pharetra</p>
                        </div>
                        <IoArrowForward className='invisible  xl:group-hover:visible'/>
                    </button>

                    <button
                        className='group items-center text-[20px] justify-between hover:shadow-md flex hover:bg-white rounded-[8px] p-[16px]'>
                        <div className='items-center flex'>
                            <Image src={'/images/icons/screen.svg'} alt={'cohete'} width={24} height={24}/>
                            <p className='px-[16px]'>Amet, fringilla</p>
                        </div>
                        <IoArrowForward className='invisible xl:group-hover:visible'/>
                    </button>

                    <button
                        className='group items-center text-[20px]  justify-between hover:shadow-md flex hover:bg-white rounded-[8px] p-[16px]'>
                        <div className='items-center flex'>
                            <Image src={'/images/icons/podcast.svg'} alt={'cohete'} width={24} height={24}/>
                            <p className='px-[16px]'>Amet nibh</p>
                        </div>
                        <IoArrowForward className='invisible xl:group-hover:visible'/>
                    </button>

                    <button
                        className='group items-center justify-between text-[20px] hover:shadow-md flex hover:bg-white rounded-[8px] p-[16px]'>
                        <div className='items-center flex'>
                            <Image src={'/images/icons/settings-alt.svg'} alt={'cohete'} width={24} height={24}/>
                            <p className='px-[16px]'>Sed velit</p>
                        </div>
                        <IoArrowForward className='invisible xl:group-hover:visible'/>
                    </button>

                </div>

            </div>

            <div
                className='relative z-10 flex xl:flex-row flex-col justify-start items-center xl:items-start xl:justify-between gap-[80px]'>
                {/*Menu vista desktop*/}
                <div className='hidden xl:flex xl:flex-col gap-[16px] self-start whitespace-nowrap'>
                    {/*box-shadow: 0px 0px 4px 0px #00000012;*/}

                    <button
                        // style={{boxShadow: '4px 4px 6px -1px #0000001A'}}
                        className='items-center text-[20px] w-full justify-between shadow-md flex bg-white rounded-[8px] p-[16px]'>
                        <Image src={'/images/icons/search.svg'} alt={'cohete'} width={24} height={24}/>
                        <p className='px-[16px]'> Bibendum tellus</p>
                        <IoArrowForward className='invisible xl:visible'/>
                    </button>

                    <button
                        className='group items-center text-[20px] justify-between hover:shadow-md flex hover:bg-white rounded-[8px] p-[16px]'>
                        <div className='items-center flex'>
                            <Image src={'/images/icons/shield.svg'} alt={'cohete'} width={24} height={24}/>
                            <p className='px-[16px]'>Cras eget</p>
                        </div>
                        <IoArrowForward
                            className='invisible xl:group-hover:visible'/> {/* Icono oculto por defecto */}
                    </button>

                    <button
                        className='group items-center text-[20px] justify-between hover:shadow-md flex hover:bg-white rounded-[8px] p-[16px]'>
                        <div className='items-center flex'>
                            <Image src={'/images/icons/rocket.svg'} alt={'cohete'} width={24} height={24}/>
                            <p className='px-[16px]'>Dolor pharetra</p>
                        </div>
                        <IoArrowForward className='invisible  xl:group-hover:visible'/>
                    </button>

                    <button
                        className='group items-center text-[20px] justify-between hover:shadow-md flex hover:bg-white rounded-[8px] p-[16px]'>
                        <div className='items-center flex'>
                            <Image src={'/images/icons/screen.svg'} alt={'cohete'} width={24} height={24}/>
                            <p className='px-[16px]'>Amet, fringilla</p>
                        </div>
                        <IoArrowForward className='invisible xl:group-hover:visible'/>
                    </button>

                    <button
                        className='group items-center text-[20px]  justify-between hover:shadow-md flex hover:bg-white rounded-[8px] p-[16px]'>
                        <div className='items-center flex'>
                            <Image src={'/images/icons/podcast.svg'} alt={'cohete'} width={24} height={24}/>
                            <p className='px-[16px]'>Amet nibh</p>
                        </div>
                        <IoArrowForward className='invisible xl:group-hover:visible'/>
                    </button>

                    <button
                        className='group items-center justify-between text-[20px] hover:shadow-md flex hover:bg-white rounded-[8px] p-[16px]'>
                        <div className='items-center flex'>
                            <Image src={'/images/icons/settings-alt.svg'} alt={'cohete'} width={24} height={24}/>
                            <p className='px-[16px]'>Sed velit</p>
                        </div>
                        <IoArrowForward className='invisible xl:group-hover:visible'/>
                    </button>

                </div>

                <div className='static'>
                    <Image src={'/images/grow/photo-group.svg'} alt={'Foto-group'} width={944} height={556}/>
                </div>
            </div>

            <Image className='w-full absolute left-0 bottom-0' src={'/images/grow/FongoGrow3.svg'} alt={'Foto-group'}
                   width={1440} height={684}/>
            <Image className='w-full absolute left-0  bottom-0' src={'/images/grow/FongoGrow2.svg'} alt={'Foto-group'}
                   width={1440} height={554}/>
            <Image className='w-full absolute left-0  bottom-0' src={'/images/grow/FongoGrow1.svg'} alt={'Foto-group'}
                   width={1440} height={372}/>
        </div>
    )
}
