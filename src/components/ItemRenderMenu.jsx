import { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";

function ItemRenderMenu() {
  const [selected, setSelected] = useState("All");

  const handleTabClick = (itemName) => {
    setSelected(itemName);
  };

  return (
    // <div className="max-w-sm mx-auto md:max-w-2xl lg:max-w-7xl">
    <div className="">
      <div className="w-full border-b flex items-center gap-4">
        <button
          onClick={() => {
            handleTabClick("All");
          }}
          className={`cursor-pointer py-2 w-16 border-[#f2545f] text-center ${
            selected === "All" ? "border-b-2" : ""
          }`}
        >
          All
        </button>
        <button
          onClick={() => {
            handleTabClick("Board");
          }}
          className={`cursor-pointer py-2 w-16 border-[#f2545f] text-center ${
            selected === "Board" ? "border-b-2" : ""
          }`}
        >
          Board
        </button>
        <button
          onClick={() => {
            handleTabClick("Graph");
          }}
          className={`cursor-pointer py-2 w-16 border-[#f2545f] text-center ${
            selected === "Graph" ? "border-b-2" : ""
          }`}
        >
          Graph
        </button>
        <button
          onClick={() => {
            handleTabClick("Recent");
          }}
          className={`cursor-pointer py-2 w-16 border-[#f2545f] text-center ${
            selected === "Recent" ? "border-b-2" : ""
          }`}
        >
          Recent
        </button>
        <button className="cursor-pointer ">
          <HiDotsVertical />
        </button>
      </div>
    </div>
  );
}

export default ItemRenderMenu;
