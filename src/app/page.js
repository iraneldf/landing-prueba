import Image from "next/image";
import NavBar from "@/components/NavBar";
import Prensentacion from "@/components/Prensentacion";

export default function Home() {
    return (
        <div className='items-center justify-center lg:bg-gradient-to-b lg:from-amber-50 lg:to-white'>
            <NavBar/>

            <Prensentacion/>

        </div>
    );
}
