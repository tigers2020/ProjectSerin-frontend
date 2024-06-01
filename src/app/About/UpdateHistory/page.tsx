"use client"
import useSocket from "@/data/useSocket";
import Layout from "@/app/layout";

const UpdateHistory = () => {
    useSocket("http://localhost:3000");

    return (
        <Layout>
            <h2 className="text-2xl font-bold">Update History</h2>
            <p>Details about the user profile.</p>
        </Layout>
    );
};

export default UpdateHistory;
