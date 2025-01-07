import "./globals.css";
import { Inter, Source_Code_Pro } from 'next/font/google';
import { baseURL } from "@/resources/config";
import { person, home } from "@/resources/content";
import { Metadata } from 'next';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

const sourceCodePro = Source_Code_Pro({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-source-code-pro',
});

export const metadata: Metadata = {
    metadataBase: new URL(`https:${baseURL}`),
    title: home.title,
    description: home.description,
    openGraph: {
        title: `${person.firstName}'s Portfolio`,
        description: 'Portfolio website showcasing my work.',
        url: baseURL,
        siteName: `${person.firstName}'s Portfolio`,
        locale: 'en_FR',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${sourceCodePro.variable}`}>
            <body className="font-sans antialiased">
                {children}
            </body>
        </html>
    );
}

