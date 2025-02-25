"use client";

import React from "react";
import Link from "next/link";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold text-red-600">
        Something went wrong! 😢
      </h1>
      <p className="text-gray-600 mt-2">We encountered an unexpected error.</p>

      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Try Again
      </button>

      <Link
        href="/"
        className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
      >
        Back to Homepage
      </Link>
    </div>
  );
}
