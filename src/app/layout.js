import "./globals.css";
import {Roboto} from 'next/font/google';
import {CarouselProvider} from "@/context/CarouselContext";
import {NavProvider} from "@/context/NavContext";
import 'tailwindcss/tailwind.css'; // Asegúrate de que esta línea esté presente

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
        <body>

        <CarouselProvider>
            <NavProvider>
                <main className="w-full">{children}</main>
            </NavProvider>
        </CarouselProvider>
        </body>
        </html>
    );
}
