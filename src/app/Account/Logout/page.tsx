// path/src/app/Account/Logout/page.tsx
import React from 'react';
import { RootLayout } from '@app/Layout';

const LogoutPage = () => {
  return (
    <RootLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold">Logout</h1>
        <p>You have been logged out.</p>
      </div>
    </RootLayout>
  );
};

export default LogoutPage;
