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
        <head>
            <title>Project Serin</title>
            <script src="http://localhost:3000"></script>

        </head>

        <body className={inter.className}>
        <main>
            <div className="flex">
                <div className="min-h-dvh">
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
