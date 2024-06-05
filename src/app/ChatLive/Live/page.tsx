// path/src/app/ChatLive/Live/page.tsx
import React from 'react';
import { RootLayout } from '@app/Layout';

const LiveChatPage = () => {
  return (
    <RootLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold">Live Chat</h1>
        <p>Engage in real-time conversations with AI or other users.</p>
      </div>
    </RootLayout>
  );
};

export default LiveChatPage;
