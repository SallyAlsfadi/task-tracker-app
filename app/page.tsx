import React from "react";

const API_URL = "https://jsonplaceholder.typicode.com/todos?_limit=5";

export default async function Home() {
  const response = await fetch(API_URL);
  const tasks = await response.json();

  const completedTasks = tasks.filter(
    (task: { completed: boolean }) => task.completed
  );
  const pendingTasks = tasks.filter(
    (task: { completed: boolean }) => !task.completed
  );

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-center mb-6">Task Tracker</h1>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 shadow-md">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2 text-lg">
                Completed Tasks
              </th>
              <th className="border border-gray-400 px-4 py-2 text-lg">
                Pending Tasks
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({
              length: Math.max(completedTasks.length, pendingTasks.length),
            }).map((_, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border border-gray-400 px-4 py-2">
                  {completedTasks[index] ? completedTasks[index].title : "-"}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {pendingTasks[index] ? pendingTasks[index].title : "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
