import { useEffect } from "react";
import { io } from "socket.io-client";

const useSocket = (url: string) => {
    useEffect(() => {
        const socket = io(url);
        socket.on("connect", () => {
            console.log("Connected!");
        });
        socket.on("disconnect", () => {
            console.log("Disconnected!");
        });
        return () => {
            socket.disconnect();
        };
    }, [url]);
};

export default useSocket;
