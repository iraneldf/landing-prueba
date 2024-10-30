import Image from "next/image";

export default function CarruelItem() {
    return (
        <div className='bg-white shadow flex flex-col gap-[16px] rounded-[20px] p-[32px] mx-[124px] w-full'>

            <div className='py-[16px] flex'>
                <Image className='mr-[3px]' src={'/images/icons/carrusel/iconCarrusel1.svg'}
                       alt={'icon 1'} width={30.4} height={32}/>
                <h1 className=' font-bold text-[#475569] leading-[26.4px]'>SHELLS</h1>
            </div>

            <p className='leading-[38.4px]'>Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet
                enim. Sit purus venenatis
                velit semper lectus sed ornare quam nulla.</p>

            <div className='flex pt-[16px] items-center gap-[16px]'>
                <Image className='inline mr-[3px]' src={'/images/icons/carrusel/avatar1.svg'}
                       alt={'icon 1'} width={64} height={64}/>
                <div>
                    <p>Hellena John</p>
                    <p className='text-[#475569]'>Co-founder</p>
                </div>
            </div>

        </div>
    )
}