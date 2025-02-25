import React from "react";
import Image from "next/image";
import Link from "next/link";

const fetchTask = async (id: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );

  if (!response.ok) {
    return null;
  }

  return response.json();
};

export default async function TaskDetails({
  params,
}: {
  params: { id: string };
}) {
  const task = await fetchTask(params.id);

  if (!task) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold text-red-500">Task Not Found </h1>
        <Link
          href="/"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Back to Tasks
        </Link>
      </div>
    );
  }

  return (
    <main className="p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">Task Details</h1>
      <div className="border rounded-lg shadow-lg p-6 w-96 text-center bg-gray-100">
        <Image
          src={task.completed ? "/checkmark.png" : "/clock.png"}
          alt={task.completed ? "Completed" : "Pending"}
          width={40}
          height={40}
          className="mx-auto mb-4"
        />
        <h2 className="text-2xl font-semibold">{task.title}</h2>
        <p className="text-lg mt-2">
          Status:{" "}
          <span
            className={task.completed ? "text-green-600" : "text-yellow-600"}
          >
            {task.completed ? "Completed " : "Pending "}
          </span>
        </p>
      </div>
      <Link href="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded">
        Back to Tasks
      </Link>
    </main>
  );
}
