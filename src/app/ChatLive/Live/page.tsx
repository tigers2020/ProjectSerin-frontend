"use client"
import {useEffect} from 'react';
import {useRouter} from 'next/navigation';
import useSocket from '@/data/useSocket';

const Live = () => {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/Account/Login'); // 로그인 화면으로 리다이렉트
        }
    }, [router]);

    useSocket(process.env.NEXT_PUBLIC_SOCKET_SERVER_URL || '');

    return (
        <div>
            <h2 className="text-2xl font-bold">Live</h2>
            <p>Details about the user profile.</p>
        </div>
    );
};

export default Live;
