"use client"
import useSocket from "@/app/useSocket";
import Layout from "@/app/layout";

const AIConfigurationsLLM = () => {
    useSocket("http://localhost:3000");

    return (
        <Layout>
            <h2 className="text-2xl font-bold">AI Configurations LLM</h2>
            <p>Details about the user profile.</p>
        </Layout>
    );
};

export default AIConfigurationsLLM;
