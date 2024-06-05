// path/src/app/About/DeveloperInfo/page.tsx
import React from 'react';
import { RootLayout } from '@app/Layout';

const DeveloperInfoPage = () => {
  return (
    <RootLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold">Developer Information</h1>
        <p>Here you can find information about the developers of Serin Zenith.</p>
      </div>
    </RootLayout>
  );
};

export default DeveloperInfoPage;
