// path/src/app/Settings/System/page.tsx
import React from 'react';
import { RootLayout } from '@app/Layout';

const SystemSettingsPage = () => {
  return (
    <RootLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold">System Settings</h1>
        <p>Manage system-level settings and configurations here.</p>
      </div>
    </RootLayout>
  );
};

export default SystemSettingsPage;
