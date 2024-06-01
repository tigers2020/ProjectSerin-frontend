"use client"
import useSocket from "@/data/useSocket";
import Layout from "@/app/layout";

const AIConfigurationsTTS = () => {
    useSocket("http://localhost:3000");

    return (
        <Layout>
            <h2 className="text-2xl font-bold">AI Configurations TTS</h2>
            <p>Details about the user profile.</p>
        </Layout>
    );
};

export default AIConfigurationsTTS;
