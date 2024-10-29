import {IoArrowBack, IoArrowForward} from "react-icons/io5";

export default function About() {
    return (
        <div className="py-[160px] px-[80px] bg-[#FFFBEB]">

            <div className='flex gap-[48px] justify-between'>

                <h1 className='font-bold leading-[61.6px] text-[56px]'>Because they love us</h1>

                <div className='flex gap-[24px]'>
                    <button
                        className="flex items-center justify-center w-[48px] h-[48px] bg-transparent text-[#78350F] rounded-full border-2 border-[#78350F] transition-transform duration-300 ease-in-out hover:bg-[#78350F] hover:text-white hover:shadow-lg">
                        <IoArrowBack className='w-[24px] h-[24px]'/>
                    </button>
                    <button
                        className="flex items-center justify-center w-[48px] h-[48px] bg-transparent text-[#78350F] rounded-full border-2 border-[#78350F] transition-transform duration-300 ease-in-out hover:bg-[#78350F] hover:text-white hover:shadow-lg">
                        <IoArrowForward className='w-[24px] h-[24px]'/>
                    </button>

                </div>


            </div>

        </div>


    );
}
