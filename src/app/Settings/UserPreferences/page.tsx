// path/src/app/Settings/UserPreferences/page.tsx
import React from 'react';
import { RootLayout } from '@app/Layout';

const UserPreferencesPage = () => {
  return (
    <RootLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold">User Preferences</h1>
        <p>Personalize your experience by setting user preferences here.</p>
      </div>
    </RootLayout>
  );
};

export default UserPreferencesPage;
