import Image from "next/image";

export default function MapCollection() {
    return (
        <div className='flex py-[80px] items-center justify-center bg-[#78350F] relative'>

            <div className='absolute flex flex-col gap-[8px]'>
                <h1 className='text-[96px] text-white font-bold leading-[105.6px] text-center'>11,658,467</h1>
                <h3 className='text-[56px] text-white font-bold leading-[61.6px] text-center'>Shoes Collected</h3>
            </div>

            <Image
                className='overflow-auto h-[633px] w-auto'
                src={'/images/map-section/chart.svg'}
                alt={'Mapa fondo'}
                width={1049}
                height={633}
            />


            <Image
                className='absolute'
                src={'/images/map-section/cartel.svg'}
                alt={'Popup'}
                width={256}
                height={200}
                style={{top: '20px', left: 'calc(50% - 225px)'}} // Centrado horizontalmente
            />

        </div>
    );
}
