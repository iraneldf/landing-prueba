import NavBar from "@/components/Nav/NavBar";
import Prensentacion from "@/components/Prensentacion";
import Gallery from "@/components/Gallery";
import Frame3 from "@/components/Frame3";
import About from "@/components/About";
import Fotter from "@/components/Fotter";
import Amazing from "@/components/Amazing";
import Articles from "@/components/Articles";
import MapCollection from "@/components/MapCollection";
import Grow from "@/components/Grow";
import {NavProvider} from "@/context/NavContext";

export default function Home() {
    return (<div className='flex flex-col sm:bg-gradient-to-b sm:from-amber-50 sm:to-white '>


            <NavBar/>

            <Prensentacion/>

            <Gallery/>

            <Frame3/>

            <About/>

            <Grow/>

            <MapCollection/>

            <Articles/>

            <Amazing/>

            <Fotter/>
        </div>);
}
