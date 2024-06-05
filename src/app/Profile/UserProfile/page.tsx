// path/src/app/Profile/AIProfile/page.tsx
import React from 'react';
import { RootLayout } from '@app/Layout';

const AIProfilePage = () => {
  return (
    <RootLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold">AI Profile</h1>
        <p>Manage and view the profiles of AI characters.</p>
      </div>
    </RootLayout>
  );
};

export default AIProfilePage;
