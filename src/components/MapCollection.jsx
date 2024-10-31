import Image from "next/image";

export default function MapCollection() {
    return (
        <div
            className=' flex lg:py-[42px] items-center justify-start lg:justify-center bg-[#78350F] relative overflow-hidden'>

            <div className='z-10 absolute flex flex-col gap-[8px] right-0 left-0'>
                <h1 className='text-[48px] lg:text-[96px] text-white font-bold leading-[52.8px] lg:leading-[105.6px] text-center'>11,658,467</h1>
                <h3 className='text-[32px] lg:text-[56px] text-white font-bold leading-[35.2px] lg:leading-[61.6px] text-center'>Shoes
                    Collected</h3>
            </div>

            <div className='z-0 relative'>
                <Image
                    className='min-w-[1049px] overflow-auto justify-self-start h-[633px] w-auto object-scale-down'
                    src={'/images/map-section/chart.svg'}
                    alt={'Mapa fondo'}
                    width={1049}
                    height={633}
                />

                    <Image
                        className='absolute left-[20px] bottom-[333px]'
                        src={'/images/map-section/cartel.svg'}
                        alt={'Popup'}
                        width={256}
                        height={264}
                    />

                <div
                    className={'absolute top-[298px] left-[210px] object-cover border-[3px] border-[#A3E635] rounded-[50%] w-[24px] h-[24px]'}/>
                <div
                    className={'absolute top-[498px] left-[324px] object-cover border-[3px] border-[#A3E635] rounded-[50%] w-[24px] h-[24px]'}/>
                <div
                    className={'absolute top-[168px] left-[328px] object-cover border-[3px] border-[#A3E635] rounded-[50%] w-[30px] h-[30px]'}/>
                <div
                    className={'absolute top-[67px] left-[413px] object-cover border-[3px] border-[#A3E635] rounded-[50%] w-[16px] h-[16px]'}/>
                <div
                    className={'absolute top-[468px] left-[371px] object-cover border-[3px] border-[#A3E635] rounded-[50%] w-[16px] h-[16px]'}/>
                <div
                    className={'absolute top-[432px] left-[584px] object-cover border-[3px] border-[#A3E635] rounded-[50%] w-[25px] h-[25px]'}/>
                <div
                    className={'absolute top-[339px] left-[785px] object-cover border-[3px] border-[#A3E635] rounded-[50%] w-[24px] h-[24px]'}/>
                <div
                    className={'absolute top-[329px] left-[886px] object-cover border-[3px] border-[#A3E635] rounded-[50%] w-[16px] h-[16px]'}/>
                <div
                    className={'absolute top-[488px] left-[910px] object-cover border-[3px] border-[#A3E635] rounded-[50%] w-[24px] h-[24px]'}/>

            </div>


        </div>
    );
}
