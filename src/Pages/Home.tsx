// import { Search as SearchIcon } from "@mui/icons-material"
import SearchIcon from "../assets/SearchIcon.png";
import FilterIcon from "../assets/filter.png";
import TaskCard from "../components/TaskCard";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import activeIcon from "../assets/activeIcon.png";
import expiredIcon from "../assets/ExpiredIcon.png";
import completedIcon from "../assets/activeIcon.png";
import AddTask from "../components/AddTask";
import { useState } from "react";
import DeadlinePicker from "../components/DeadlinePicker";

interface SideBoxProps {
  icon: string;
  title: string;
  count: number;
  bg: string;
}

const SideBox: React.FC<SideBoxProps> = ({ icon: Icon, title, count, bg }) => {
  return (
    <div
      className="bg-[#ECEDEE] drop-shadow-[0_4px_4px_#00000040] 
          rounded-2xl py-[18px] pr-[43px] pt-[18px] pb-[24px] pl-[18px] 
          flex flex-col justify-center gap-[10px]"
    >
      <div
        style={{ backgroundColor: bg }}
        className=" w-12 h-12 rounded-full flex items-center justify-center"
      >
        <img src={Icon} alt="" />
      </div>
      <div className="text-sm text-[#797979] font-[600]">{title}</div>
      <div className="text-[28px] font-bold">{count}</div>
    </div>
  );
};

const Home = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  return (
    <div className="min-h-screen pt-12 px-5 pb-4">
      <div className="bg-[#ECEDEE] p-5 rounded-[20px] h-[84px] w-[1519px] drop-shadow-[0_4px_4px_#00000040] flex justify-between">
        <div className="bg-white text-[#5A5A5A] font-[500] text-sm  h-[44px] w-[344px] rounded-[22px] flex items-center py-[10px] px-[12px] drop-shadow-[0_4px_4px_#00000040]">
          <img src={SearchIcon} />
          <input
            type="text"
            placeholder="Search Project"
            className="w-full h-full mx-1 focus:outline-none"
          />
        </div>
        <div className="bg-[#FFFFFF] rounded-[5px] font-[500] w-[107px] h-[39px] border-black border text-[#797979] gap-1  flex items-center justify-center">
          <img src={FilterIcon} className="h-4 w-4 " />
          <select id="filter" name="Filter" className="bg-[#FFFFFF] ">
            <option value="option1">Filter</option>
          </select>
        </div>
      </div>
      <div className=" h-[668px] w-[1519px] gap-[54px] grid grid-cols-4 mt-4">
        <div className="w-[300px]  h-full grid grid-rows-3 gap-4 ">
          <SideBox
            bg="#F42D20"
            icon={expiredIcon}
            title="Expired tasks"
            count={2}
          />
          <SideBox
            bg="#E89271"
            icon={activeIcon}
            title="All acitve tasks"
            count={4}
          />
          <SideBox
            bg="#70A1E5"
            icon={completedIcon}
            title="Completed tasks"
            count={6}
          />

          <div
            className="bg-[#0D062D] rounded-[19px] flex justify-center
           text-white p-4 hover:cursor-pointer"
            onClick={() => setShowAddTask(true)}
          >
            <AddSharpIcon />
            <span>Add Task </span>
          </div>
        </div>
        <div
          className="bg-[#ECEDEE] w-[354px] h-[668px] 
              rounded-[10px] pt-[20px] pb-[20px] "
        >
          <div className="flex justify-center items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#5030E5]"></div>
            <h1 className="text-center">To Do</h1>
            <div className="w-5 h-5 bg-[#E0E0E0] text-[#625F6D] text-xs justify-center flex items-center rounded-full">
              4
            </div>
          </div>
          <hr className="border-t-[3px] border-[#5030E5] w-[314px]  my-4 mx-auto" />
          <div className="flex flex-col gap-4 items-center justify-center">
            <TaskCard
              priority="high" // Ensure valid values
              title="Complete React Assignment"
              description="Work on the React project for internship submission."
              deadline={new Date("2025-12-10")}
            />{" "}
            <TaskCard
              priority="high" // Ensure valid values
              title="Complete React Assignment"
              description="Work on the React project for internship submission."
              deadline={new Date("2025-12-10")}
            />{" "}
            <TaskCard
              priority="medium" // Ensure valid values
              title="Complete React Assignment"
              description="Work on the React project for internship submission."
              deadline={new Date("2025-12-10")}
            />{" "}
          </div>
        </div>
        <div
          className="bg-[#ECEDEE] w-[354px] h-[668px] 
              rounded-[10px] pt-[20px] pb-[20px] "
        >
          <div className="flex justify-center items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#5030E5]"></div>
            <h1 className="text-center">On Progress</h1>
            <div className="w-5 h-5 bg-[#E0E0E0] text-[#625F6D] text-xs justify-center flex items-center rounded-full">
              4
            </div>
          </div>

          <hr className="border-t-[3px] border-[#FFA500] w-[314px]  my-4 mx-auto" />
          <div className="flex flex-col gap-4 items-center justify-center">
            <TaskCard
              priority="high" // Ensure valid values
              title="Complete React Assignment"
              description="Work on the React project for internship submission."
              deadline={new Date("2025-12-10")}
            />{" "}
          </div>
        </div>
        <div
          className="bg-[#ECEDEE] w-[354px] h-[668px] 
              rounded-[10px] pt-[20px] pb-[20px] "
        >
          <div className="flex justify-center items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#5030E5]"></div>
            <h1 className="text-center">Done</h1>
            <div className="w-5 h-5 bg-[#E0E0E0] text-[#625F6D] text-xs justify-center flex items-center rounded-full">
              4
            </div>
          </div>
          <hr className="border-t-[3px] border-[#8BC48A] w-[314px]  my-4 mx-auto" />
          <div className="flex flex-col gap-4 items-center justify-center">
            <TaskCard
              priority="low" // Ensure valid values
              title="Complete React Assignment"
              description="Work on the React project for internship submission."
              deadline={new Date("2025-12-10")}
            />{" "}
            <TaskCard
              priority="medium" // Ensure valid values
              title="Complete React Assignment"
              description="Work on the React project for internship submission."
              deadline={new Date("2025-12-10")}
            />{" "}
            <TaskCard
              priority="high" // Ensure valid values
              title="Complete React Assignment"
              description="Work on the React project for internship submission."
              deadline={new Date("2025-12-10")}
            />{" "}
          </div>
        </div>
      </div>

      {/* Overlay and AddTask Component (conditionally rendered) */}
      {showAddTask && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10">
          <div className="relative">
            <AddTask />
            {/* Close Button */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
