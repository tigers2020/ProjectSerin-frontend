// path/src/app/Settings/AIConfigurations/Character/page.tsx
import React from 'react';
import { RootLayout } from '@app/Layout';

const CharacterSettingsPage = () => {
  return (
    <RootLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold">AI Character Settings</h1>
        <p>Customize the characteristics and behaviors of your AI characters here.</p>
      </div>
    </RootLayout>
  );
};

export default CharacterSettingsPage;
