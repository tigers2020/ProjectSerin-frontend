// path/src/app/layout.tsx
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { SidebarMenu } from '@organisms/SidebarMenu'; // 사이드바 메뉴 컴포넌트를 참조
import '@styles/styles.css'; // 전역 스타일

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();

    useEffect(() => {
        console.log(`Page loaded: ${router.pathname}`);
    }, [router.pathname]);

    return (
        <html>
            <head>
                <title>Project Serin</title>
            </head>
            <body>
                <div className="min-h-screen flex">
                    <SidebarMenu />
                    <main className="flex-1">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
};
