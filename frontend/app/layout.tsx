
"use client";

import "./globals.css";
import { ReactNode, useEffect } from "react";
import { auth } from "../firebaseConfig";


type RootLayoutProps = {
  children: ReactNode;
};

interface User {
  name: string;
  id: number;
}

const metadata = {
  title: "Housekeeping Management System",
  description: "Manage housekeeping tasks efficiently",
};

export default function RootLayout({ children }: RootLayoutProps) {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("User is logged in:", user);
      } else {
        console.log("User is logged out");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
