import Image from "next/image";

export default function MapCollection() {
    return (
        <div className=' flex lg:py-[42px] items-center justify-start lg:justify-center bg-[#78350F] relative overflow-hidden'>

            <div className='absolute flex flex-col top-6 gap-[8px] lg:hidden'>
                <Image
                    className=''
                    src={'/images/map-section/cartel.svg'}
                    alt={'Popup'}
                    width={256}
                    height={200}
                />
            </div>

            <div className='absolute flex flex-col gap-[8px] right-0 left-0'>
                <h1 className='text-[48px] lg:text-[96px] text-white font-bold leading-[52.8px] lg:leading-[105.6px] text-center'>11,658,467</h1>
                <h3 className='text-[32px] lg:text-[56px] text-white font-bold leading-[35.2px] lg:leading-[61.6px] text-center'>Shoes
                    Collected</h3>
            </div>


            <Image
                className='min-w-[1049px] overflow-auto justify-self-start h-[633px] w-auto object-scale-down'
                src={'/images/map-section/chart.svg'}
                alt={'Mapa fondo'}
                width={1049}
                height={633}
            />


            {/*todo probar otros valo*/}
            <Image
                className='absolute hidden lg:block'
                src={'/images/map-section/cartel.svg'}
                alt={'Popup'}
                width={256}
                height={200}
                style={{top: '65px', left: 'calc(50% - 510px)'}} // Fijo horizontalmente
            />

            {/*<Image*/}
            {/*    className='absolute overflow-auto h-[633px] w-auto object-cover'*/}
            {/*    src={'/images/map-section/chartResponsive.svg'}*/}
            {/*    alt={'Mapa fondo'}*/}
            {/*    layout={'fill'}*/}
            {/*/>*/}


        </div>
    );
}
