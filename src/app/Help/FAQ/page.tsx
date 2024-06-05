// path/src/app/Help/FAQ/page.tsx
import React from 'react';
import { RootLayout } from '@app/Layout';

const FAQPage = () => {
  return (
    <RootLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold">Frequently Asked Questions</h1>
        <p>Find answers to common questions about using Serin Zenith.</p>
      </div>
    </RootLayout>
  );
};

export default FAQPage;
