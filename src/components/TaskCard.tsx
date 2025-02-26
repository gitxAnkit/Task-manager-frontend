import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";

interface TaskCardProps {
  priority: "low" | "medium" | "high";
  title: string;
  description: string;
  deadline: Date;
}

const TaskCard: React.FC<TaskCardProps> = ({ priority, title, description, deadline }) => {
  // Define priority styles
  const priorityStyles: Record<"low" | "medium" | "high", { bg: string; text: string }> = {
    low: { bg: "bg-[#DFA87433]", text: "text-[#D58D49]" },
    medium: { bg: "bg-[#F6C92733]", text: "text-[#F6C927]" },
    high: { bg: "bg-[#D8727D1A]", text: "text-[#D8727D]" },
  };

  return (
    <div className="w-[314px] h-[177px] rounded-2xl p-4 drop-shadow-[0_4px_4px_#00000040] bg-[#FFFFFF]">
      {/* Priority & Menu */}
      <div className="flex justify-between">
        <div 
          className={`h-6 rounded-md p-2 text-sm flex justify-center items-center 
          ${priorityStyles[priority]?.bg || "bg-gray-200"} 
          ${priorityStyles[priority]?.text || "text-gray-600"}`}
        >
          {priority.charAt(0).toUpperCase() + priority.slice(1)}
        </div>
        <MoreHorizSharpIcon />
      </div>

      {/* Title */}
      <div className="text-lg font-bold text-[#0D062D]">
        {title}
      </div>

      {/* Description */}
      <div className="text-xs text-[#787486] text-justify">
        {description}
      </div>

      {/* Deadline */}
      <div className="my-2">
        <span className="text-xs font-bold">Deadline: </span>
        <span className="text-xs font-semibold text-[#5A5A5A]">
          {deadline.toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
