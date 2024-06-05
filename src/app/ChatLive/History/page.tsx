// path/src/app/ChatLive/History/page.tsx
import React from 'react';
import { RootLayout } from '@app/Layout';

const HistoryPage = () => {
  return (
    <RootLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold">Chat History</h1>
        <p>Review your past conversations here.</p>
      </div>
    </RootLayout>
  );
};

export default HistoryPage;
