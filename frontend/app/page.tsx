// app/page.tsx
"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Housekeeping Management System
        </h1>
        <p className="text-gray-600 mb-6">
          Please select your role to proceed:
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
            href="/supervisor"
          >
            Supervisor
          </Link>
          <Link
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200"
            href="/housekeeper"
          >
            Housekeeper
          </Link>
        </div>
      </div>
    </div>
  );
}
