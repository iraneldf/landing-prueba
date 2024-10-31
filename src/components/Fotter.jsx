import {SlGlobe} from "react-icons/sl";
import Image from "next/image";

export default function Fotter() {
    return (
        <div className='px-[16px] md:px-[80px] bg-[#0F172A]'>

            <div className='flex flex-col items-center text-center md:text-left md:flex-row gap-[48px] justify-around py-[48px] border-t-[1px] border-b-[1px] border-[#334155]'>
                <div>
                    <p className='py-[12px] text-white font-bold'>Product</p>
                    <p className='py-[12px] text-[#b0bec5]'>Pricing</p>
                    <p className='py-[12px] text-[#b0bec5]'>Overview</p>
                    <p className='py-[12px] text-[#b0bec5]'>Browse</p>
                    <p className='py-[12px] text-[#b0bec5]'>Accessibility</p>
                    <p className='py-[12px] text-[#b0bec5]'>Five</p>

                </div>

                <div>
                    <p className='py-[12px] text-white font-[500]'>Solutions</p>
                    <p className='py-[12px] text-[#b0bec5]'>Brainstorming</p>
                    <p className='py-[12px] text-[#b0bec5]'>Ideation</p>
                    <p className='py-[12px] text-[#b0bec5]'>Wireframing</p>
                    <p className='py-[12px] text-[#b0bec5]'>Research</p>
                    <p className='py-[12px] text-[#b0bec5]'>Design</p>
                </div>

                <div>
                    <p className='py-[12px] text-white font-[500]'>Support</p>
                    <p className='py-[12px] text-[#b0bec5]'>Contact Us</p>
                    <p className='py-[12px] text-[#b0bec5]'>Developers</p>
                    <p className='py-[12px] text-[#b0bec5]'>Documentation</p>
                    <p className='py-[12px] text-[#b0bec5]'>Integrations</p>
                    <p className='py-[12px] text-[#b0bec5]'>Reports</p>
                </div>

                <div>
                    <p className='py-[12px] text-white font-[500]'>Get the App</p>
                    <div className='flex justify-center md:block py-[12px] text-white'>
                        <Image src={'/fotter components/App Store - Filled.svg'}
                               alt={'App store'}
                               width={120}
                               height={40}/>
                    </div>
                    <div className='flex justify-center md:block py-[12px] text-white'>
                        <Image src={'/fotter components/Google Play.svg'}
                               alt={'App store'}
                               width={135}
                               height={40}/>
                    </div>
                    <p className='pt-[48px] pb-[12px] text-white'>Follow Us</p>

                    <div className='flex gap-[16px] text-white'>

                        <Image src={'/fotter components/Youtube.svg'}
                               alt={'App store'}
                               width={24}
                               height={24}/>


                        <Image src={'/fotter components/facebook.svg'}
                               alt={'App store'}
                               width={24}
                               height={24}/>


                        <Image src={'/fotter components/twitter.svg'}
                               alt={'App store'}
                               width={24}
                               height={24}/>


                        <Image src={'/fotter components/instagram.svg'}
                               alt={'App store'}
                               width={24}
                               height={24}/>


                        <Image src={'/fotter components/linkedin.svg'}
                               alt={'App store'}
                               width={24}
                               height={24}/>
                    </div>

                    </div>
                </div>





            <div className='flex flex-col items-center lg:flex-row justify-center lg:justify-between gap-[24px] lg:gap-[48px] py-[24px]'>
                <p className='text-[#b0bec5]'>Collers @ 2023. All rights reserved.</p>

                <div className='flex gap-[32px] text-white'>
                    <div className='py-[12px] text-[#b0bec5]'>Terms</div>
                    <div className='py-[12px] text-[#b0bec5]'>Privacy</div>
                    <div className='py-[12px] text-[#b0bec5]'>Contact</div>
                    <div className='py-[12px] flex gap-[12px] text-[#b0bec5] items-center'><SlGlobe/> En</div>
                </div>
            </div>
        </div>
    );
}
