// path/src/app/Settings/AIConfigurations/TTS/page.tsx
import React from 'react';
import { RootLayout } from '@app/Layout';

const TTSSettingsPage = () => {
  return (
    <RootLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold">Text-to-Speech Settings</h1>
        <p>Configure text-to-speech options to enhance your AI interactions.</p>
      </div>
    </RootLayout>
  );
};

export default TTSSettingsPage;
