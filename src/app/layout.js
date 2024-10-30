import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/NavBar";
import {Roboto} from 'next/font/google';
import NavBar from "@/components/NavBar";
import {CarouselProvider} from "@/context/CarouselContext";


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
            <main className="w-full">{children}</main>
        </CarouselProvider>
        </body>
        </html>
    );
}
