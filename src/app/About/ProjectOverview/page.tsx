// path/src/app/About/ProjectOverview/page.tsx
import React from 'react';
import { RootLayout } from '@app/Layout';

const ProjectOverviewPage = () => {
  return (
    <RootLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold">Project Overview</h1>
        <p>Explore the goals, achievements, and roadmap of Serin Zenith.</p>
      </div>
    </RootLayout>
  );
};

export default ProjectOverviewPage;
