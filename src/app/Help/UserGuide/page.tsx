// path/src/app/Help/UserGuide/page.tsx
import React from 'react';
import { RootLayout } from '@app/Layout';

const UserGuidePage = () => {
  return (
    <RootLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold">User Guide</h1>
        <p>Get detailed instructions on how to use the features of Serin Zenith.</p>
      </div>
    </RootLayout>
  );
};

export default UserGuidePage;
