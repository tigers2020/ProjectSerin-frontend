// path/src/app/Account/Register/page.tsx
import React from 'react';
import { RootLayout } from '@app/Layout';

const RegisterPage = () => {
  return (
    <RootLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold">Register</h1>
        <p>Create a new account to enjoy all features of Serin Zenith.</p>
      </div>
    </RootLayout>
  );
};

export default RegisterPage;
