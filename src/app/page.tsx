"use client";

import { SessionProvider } from "next-auth/react";
import Login from "~/Login";

export default function Home() {
  return (
    <SessionProvider>
      <Login />
    </SessionProvider>
  );
}