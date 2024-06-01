import React from 'react';
import AccountDetails from '@/components/organisms/AccountDetails';
import AccountNav from '@/components/organisms/AccountNav';

const AccountPage: React.FC = () => {
    return (
        <div className="flex items-start justify-center min-h-screen bg-gray-100 p-6">
            <div className="w-full max-w-md bg-white shadow-md rounded p-4">
                <AccountDetails />
                <AccountNav />
            </div>
        </div>
    );
};

export default AccountPage;
