import {Inter} from "next/font/google";
import "@/styles/styles.css";
import Sidebar from "@/components/organisms/Sidebar"

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-theme={"dark"}>
        <body className={inter.className}>
        <main>
            <div className="flex">
                <div>
                    <Sidebar/>
                </div>
                <div className="flex-1 p-4">
                    {children}
                </div>
            </div>
        </main>
        </body>
        </html>
    );
}
