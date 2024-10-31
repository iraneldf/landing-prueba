import Image from "next/image";

export default function CarruelItem({icon, tittle, content, avatar, name, rol}) {
    return (
        <div className='max-w-[100px] flex flex-col gap-[16px] p-[24px] lg:p-[32px] embla__slide'>

            <div className='py-[16px] flex items-center'>
                <Image className='mr-[3px]' src={icon} alt={'icon'} width={30.4}
                       height={32}/>
                <h1 className='font-bold text-[#475569] leading-[26.4px]'>{tittle}</h1>
            </div>

            <p className='texto-limitado xl:min-h-[153px] leading-[22.4px] lg:leading-[38.4px]'>{content}</p>

            <div className='flex pt-[16px] items-center gap-[16px]'>
                <Image className='inline mr-[3px]' src={avatar} alt={'avatar'}
                       width={64} height={64}/>
                <div>
                    <p>{name}</p>
                    <p className='text-[#475569]'>{rol}</p>
                </div>
            </div>
        </div>
    )
}