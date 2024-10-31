import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Nav/NavBar";
import {Roboto} from 'next/font/google';
import NavBar from "@/components/Nav/NavBar";
import {CarouselProvider} from "@/context/CarouselContext";
import {NavProvider} from "@/context/NavContext";


const roboto = Roboto({
    weight: '700',
    subsets: ['latin'],
});

export const metadata = {
    title: "Prueba landing Nox",
    description: "Langind de prueba para Nox Corporation",
};

export default function RootLayout({children}) {
    return (
        <html suppressHydrationWarning lang="en">
        <body className={roboto.className}>

        <CarouselProvider>
            <NavProvider>
                <main className="w-full">{children}</main>
            </NavProvider>
        </CarouselProvider>
        </body>
        </html>
    );
}
