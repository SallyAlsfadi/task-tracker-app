import React from "react";
import TaskItem from "./components/TaskItem";
import Link from "next/link";

const API_URL = "https://jsonplaceholder.typicode.com/todos?_limit=5";

export default async function Home() {
  const response = await fetch(API_URL);
  const tasks = await response.json();

  const completedTasks = tasks.filter((task) => task.completed);
  const pendingTasks = tasks.filter((task) => !task.completed);

  return (
    <main className="p-8">
      <h1 className="text-4xl font-extrabold text-center mb-6">Task Tracker</h1>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 shadow-lg text-center">
          <thead>
            <tr className="bg-gray-300 text-lg">
              <th className="border border-gray-400 px-6 py-3 font-bold">
                Completed Tasks
              </th>
              <th className="border border-gray-400 px-6 py-3 font-bold">
                Pending Tasks
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({
              length: Math.max(completedTasks.length, pendingTasks.length),
            }).map((_, index) => (
              <tr
                key={index}
                className="bg-white even:bg-gray-100 hover:bg-gray-200 transition"
              >
                <td className="border border-gray-400 px-6 py-3">
                  {completedTasks[index] ? (
                    <Link
                      href={`/task/${completedTasks[index].id}`}
                      className="hover:underline"
                    >
                      <TaskItem
                        title={completedTasks[index].title}
                        completed={true}
                      />
                    </Link>
                  ) : (
                    "-"
                  )}
                </td>
                <td className="border border-gray-400 px-6 py-3">
                  {pendingTasks[index] ? (
                    <Link
                      href={`/task/${pendingTasks[index].id}`}
                      className="hover:underline"
                    >
                      <TaskItem
                        title={pendingTasks[index].title}
                        completed={false}
                      />
                    </Link>
                  ) : (
                    "-"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
