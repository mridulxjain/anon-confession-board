import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/navbar";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-background overflow-auto">
      <Navbar />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
    </div>
  );
}