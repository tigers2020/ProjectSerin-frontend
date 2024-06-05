// path/src/app/Account/Edit/page.tsx
import React from 'react';
import { RootLayout } from '@app/Layout';

const EditAccountPage = () => {
  return (
    <RootLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold">Edit Account</h1>
        <p>Edit your account details here.</p>
      </div>
    </RootLayout>
  );
};

export default EditAccountPage;
