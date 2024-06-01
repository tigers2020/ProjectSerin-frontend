import {useEffect, useRef} from 'react';
import {io, Socket} from 'socket.io-client';

const useSocket = (url: string) => {
    const socketRef = useRef<Socket | null>(null);

    useEffect(() => {
        socketRef.current = io(url, {path: "/ws/socket.io"});
        socketRef.current.on('connect', () => {
            console.log('connected to server');
        });
        socketRef.current.on('disconnect', () => {
            console.log('disconnected from server');
        });
        socketRef.current.on('connect_error', (error) => {
            console.error('Connection error:', error);
        });
        socketRef.current.on('reconnect_attempt', () => {
            console.log('Attempting to reconnect...');
        });
        return () => {
            if (socketRef.current)
                socketRef.current.disconnect();
        };
    }, [url]);
    return socketRef.current;
};
export default useSocket;