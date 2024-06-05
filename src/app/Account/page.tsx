// path/src/app/Account/page.tsx
import React from 'react';
import { RootLayout } from '@app/Layout';

const AccountPage = () => {
  return (
    <RootLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold">Account</h1>
        <p>Manage your account settings and preferences here.</p>
      </div>
    </RootLayout>
  );
};

export default AccountPage;
