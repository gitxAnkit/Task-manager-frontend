import AddSharpIcon from "@mui/icons-material/AddSharp";
import MoreVertSharpIcon from "@mui/icons-material/MoreVertSharp";
import { useState } from "react";
import DeadlinePicker from "./DeadlinePicker";



const AddTask = () => {
  // const [deadline, setDeadline] = useState<Date | null>(null);
  const [isDealineOpen, setIsDeadlineOpen] = useState<boolean>(true);
  return (
    <div className="h-[504px] w-[333px] bg-white border-black border-2 rounded-[10px] p-5 shadow-lg">
      <div>
        <div className="flex justify-between">
          <div className=" flex items-center justify-center gap-1">
            <div className="h-2 w-2 rounded-full bg-[#20E7F4]"></div>
            <h1 className="text-xl text-black font-bold">ADD TASK</h1>
          </div>
          <div className="text-[#0D25FF] h-[14px] w-[14px]">
            <AddSharpIcon />
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-[#E1E2EA] w-[293px]  my-4 mx-auto" />
      <div className="w-[293px]">
        <div className="border-b-2 border-black flex justify-between w-full">
          <input
            className="border-none bg-transparent w-full focus:outline-none text-md font-bold"
            type="text"
          />
          <MoreVertSharpIcon />
        </div>
        <div className="text-justify overflow-auto p-1 max-h-[352px] text-[14px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, inventore
          asperiores voluptates corrupti, earum expedita explicabo officiis
          fugit suscipit laboriosam nobis illum sed repellat. Placeat quasi
          incidunt libero illum dolor cumque aliquid. Commodi dolorum dicta quam
          dolor cum alias, non cupiditate necessitatibus molestias, hic
          inventore nemo, corrupti delectus facilis praesentium provident esse
          architecto fugit eum. Esse, repellendus! Obcaecati, voluptatem
          eveniet!
        </div>

        <div className="flex justify-between  font-bold text-sm pt-2">
          <div onClick={() => setIsDeadlineOpen(true)}
            className="hover:cursor-pointer">Deadline</div>
          <div>Assigned to</div>
        </div>
      </div>
      {isDealineOpen && (
        <div className="bg-black bg-opacity-20 flex items-center justify-center">
          <DeadlinePicker  />
        </div>
      )}
    </div>
  );
};

export default AddTask;
