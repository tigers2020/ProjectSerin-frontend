import React from 'react';
import UserProfilePage from "@/components/organisms/UserProfilePage";

const AIProfile: React.FC = () => {
    return (
        <div className="flex items-start justify-center min-h-screen bg-gray-100 p-6">
            <div className="w-full max-w-md bg-white shadow-md rounded p-4">
                <UserProfilePage/>
            </div>
        </div>
    );
};

export default AIProfile;
