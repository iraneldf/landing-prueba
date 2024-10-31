import NavBar from "@/components/Nav/NavBar";
import Prensentacion from "@/components/Prensentacion";
import Image from "next/image";
import ShoppingCart from "../../public/images/icons/shopping-cart";

export default function Gallery() {
    return (


        <div className="py-[48px] px-[16px] lg:p-[80px] bg-[#0F172A] w-[1,440px] flex flex-col gap-[80px] relative">

            <div className="flex flex-col lg:flex-row justify-between items-center gap-[32px] lg:gap-[80px] ">
                <h1 className="text-[32px] leading-[35.2px] font-bold text-center lg:text-5xl lg:leading-[61.6px] lg:text-left text-white">The
                    best of the best</h1>

                <button
                    className="text-[24px] font-[700] leading-[24px] tracking-[0.5px] px-[24px] py-[20px] w-[233px] rounded-[8px] border-[2px] border-white text-white hover:bg-white hover:text-[#0B1120]">
                    Sign up now
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[48px] ">

                <div className="z-50 bg-[#1E293B] rounded-[10px] border border-[#0F172A]
                shadow-[0px_25px_50px_-12px_rgba(255,255,255,0.25)]
                ">
                    <Image src="/images/Picture1.svg"
                           alt="Close-up of stylish sneakers with a red swoosh on a yellow background"
                           className="w-full h-48 object-cover rounded-t-[10px]"
                           width={50}
                           height={50}
                           objectFit={'fill'}
                    />

                    <div className='flex flex-col gap-[16px] pt-[32px] px-[32px]'>
                        <h2 className="text-[24px] font-bold text-white leading-[26.4px]">Title</h2>

                        <p className="text-white text-[18px] leading-[28.8px]">Egestas elit dui
                            scelerisque ut eu purus aliquam vitae
                            habitasse.</p>
                    </div>

                    <div className='p-[32px]'>
                        <button
                            className="w-full px-4 py-2 border-[2px] border-white rounded-[8px]
                                 text-white flex items-center justify-center hover:bg-white hover:text-[#0B1120]">
                            <ShoppingCart/>
                            <p className='px-[16px]'> Buy Now</p>
                        </button>
                    </div>

                </div>

                <div className="z-10 bg-[#1E293B] rounded-[10px] border border-[#0F172A] relative
                shadow-[0px_25px_50px_-12px_rgba(255,255,255,0.25)]
                ">

                    <Image src="/images/Picture2.svg"
                           alt="Close-up of stylish sneakers with a red swoosh on a yellow background"
                           className="w-full h-48 object-cover rounded-t-[10px]"
                           width={50}
                           height={50}
                           objectFit={'fill'}
                    />

                    <div className='flex flex-col gap-[16px] pt-[32px] px-[32px]'>
                        <h2 className="text-[24px] font-bold text-white leading-[26.4px]">Title</h2>

                        <p className="text-white text-[18px] font-[400] leading-[28.8px]">Egestas elit dui
                            scelerisque ut eu purus aliquam vitae
                            habitasse.</p>
                    </div>

                    <div className='p-[32px]'>
                        <button
                            className="w-full px-4 py-2 border-[2px] border-white rounded-[8px]
                                 text-white flex items-center justify-center hover:bg-white hover:text-[#0B1120]">
                            <ShoppingCart/>
                            <p className='px-[16px]'> Buy Now</p>
                        </button>
                    </div>

                </div>

                <div className="z-10 bg-[#1E293B] rounded-[10px] overflow-hidden border border-[#0F172A]
                shadow-[0px_25px_50px_-12px_rgba(255,255,255,0.25)]
                ">

                    <Image src="/images/Picture3.svg"
                           alt="Close-up of stylish sneakers with a red swoosh on a yellow background"
                           className="w-full h-48 object-cover"
                           width={50}
                           height={50}
                           objectFit={'fill'}
                    />

                    <div className='flex flex-col gap-[16px] pt-[32px] px-[32px]'>
                        <h2 className="text-[24px] font-bold text-white leading-[26.4px]">Title</h2>

                        <p className="text-white text-[18px] font-[400] leading-[28.8px]">Egestas elit dui
                            scelerisque ut eu purus aliquam vitae
                            habitasse.</p>
                    </div>

                    <div className='p-[32px]'>
                        <button
                            className="w-full px-4 py-2 border-[2px] border-white rounded-[8px]
                                 text-white flex items-center justify-center hover:bg-white hover:text-[#0B1120]">
                            <ShoppingCart/>
                            <p className='px-[16px]'> Buy Now</p>
                        </button>
                    </div>

                </div>
            </div>

            <div className='hidden md:block'>
                <Image className=' absolute bottom-[150px] left-[2%]' src={'/images/figuras/Rectangle Rosa.svg'}
                       alt={"Back lights"} width={271} height={271}/>
                <Image className=' absolute top-[193px] left-[34%]' src={'/images/figuras/Rectangle azul.svg'}
                       alt={"Back lights"} width={161} height={161}/>
                <Image className=' absolute bottom-[128px] left-[58.3%]' src={'/images/figuras/Rectangle naranja.svg'}
                       alt={"Back lights"} width={130} height={130}/>
                <Image className=' absolute bottom-[56px] right-[13%]' src={'/images/figuras/Rectangle fucsia.svg'}
                       alt={"Back lights"} width={202} height={202}/>
                <Image className=' absolute top-[257px] right-[2%]' src={'/images/figuras/Rectangle verde.svg'}
                       alt={"Back lights"} width={202} height={202}/>
            </div>

            <div className='md:hidden'>
                <Image className=' absolute top-[513.8px] left-[9%]' src={'/images/figuras/Rectangle Rosa.svg'}
                       alt={"Back lights"} width={202.9} height={202.9}/>
                <Image className=' absolute top-[854.6px] right-0' src={'/images/figuras/Rectangle azul.svg'}
                       alt={"Back lights"} width={161} height={161}/>

                <Image className=' absolute bottom-[316.6px] left-0' src={'/images/figuras/Rectangle fucsia.svg'}
                       alt={"Back lights"} width={202} height={202}/>

            </div>

        </div>)

}
