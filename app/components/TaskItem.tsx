import React from "react";
import Image from "next/image";

interface TaskItemProps {
  title: string;
  completed: boolean;
}

const TaskItem: React.FC<TaskItemProps> = ({ title, completed }) => {
  return (
    <div className="flex items-center space-x-2">
      <Image
        src={completed ? "/checkmark.png" : "/clock.png"}
        alt={completed ? "Completed" : "Pending"}
        width={20}
        height={20}
      />
      <span>{title}</span>
    </div>
  );
};

export default TaskItem;
