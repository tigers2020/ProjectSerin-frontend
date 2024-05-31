"use client"
import useSocket from "@/app/useSocket";
import Layout from "@/app/layout";

const DeveloperInfo = () => {
    useSocket("http://localhost:3000");

    return (
        <Layout>
            <h2 className="text-2xl font-bold">Developer Info</h2>
            <p>Details about the user profile.</p>
        </Layout>
    );
};

export default DeveloperInfo;
