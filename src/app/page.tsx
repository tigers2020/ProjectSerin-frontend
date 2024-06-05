// path/src/app/page.tsx
import React from 'react';
import {RootLayout} from '@app/Layout';

const Home = () => {
  return (
    <RootLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold">Welcome to Serin Zenith</h1>
        <p>Explore the features and capabilities of our platform.</p>
      </div>
    </RootLayout>
  );
};

export default Home;
