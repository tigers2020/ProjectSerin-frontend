"use client"
import useSocket from "@/data/useSocket";
import Layout from "@/app/layout";

const UserGuide = () => {
    useSocket("http://localhost:3000");

    return (
        <Layout>
            <h2 className="text-2xl font-bold">User Guide</h2>
            <p>Details about the user profile.</p>
        </Layout>
    );
};

export default UserGuide;
