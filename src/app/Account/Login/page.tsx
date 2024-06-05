// path/src/app/Account/Login/page.tsx
import React from 'react';
import { RootLayout } from '@app/Layout';

const LoginPage = () => {
  return (
    <RootLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold">Login</h1>
        <p>Access your account by logging in.</p>
      </div>
    </RootLayout>
  );
};

export default LoginPage;
