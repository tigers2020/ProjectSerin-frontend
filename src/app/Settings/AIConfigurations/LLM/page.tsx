// path/src/app/Settings/AIConfigurations/LLM/page.tsx
import React from 'react';
import { RootLayout } from '@app/Layout';

const LLMSettingsPage = () => {
  return (
    <RootLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold">Language Model Settings</h1>
        <p>Adjust the settings for the language models used in your AI interactions.</p>
      </div>
    </RootLayout>
  );
};

export default LLMSettingsPage;
