"use client"
import useSocket from "@/data/useSocket";
import Layout from "@/app/layout";

const UserPreference = () => {
    useSocket("http://localhost:3000");

    return (
        <Layout>
            <h2 className="text-2xl font-bold">UserPreference</h2>
            <p>Details about the user profile.</p>
        </Layout>
    );
};

export default UserPreference;
