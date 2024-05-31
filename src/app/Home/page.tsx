"use client";

import useSocket from "@/app/useSocket";

const HomePage = () => {
  useSocket("http://localhost:3000");

  return (
    <>
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <p>System Overview</p>
    </>
  );
};

export default HomePage;
