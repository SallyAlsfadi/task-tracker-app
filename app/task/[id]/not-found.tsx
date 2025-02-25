import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold text-red-500">Task Not Found</h1>
      <p className="text-gray-600 mt-2">
        The task you are looking for does not exist.
      </p>
      <Link href="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Back to Tasks
      </Link>
    </div>
  );
}
