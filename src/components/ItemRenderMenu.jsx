import { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";

function ItemRenderMenu() {
  const [selected, setSelected] = useState("All");

  const handleTabClick = (itemName) => {
    setSelected(itemName);
  };

  return (
    <div className="">
      <div className="w-full border-b flex items-center gap-4">
        <button
          onClick={() => {
            handleTabClick("All");
          }}
          className={`relative cursor-pointer py-2 w-16 text-center ${
            selected === "All" ? "after:border-b-2 after:border-[#f2545f] after:absolute after:bottom-0 after:content-[\"\"] after:left-0 after:right-0" : ""
          }`}
        >
          All
        </button>
        <button
          onClick={() => {
            handleTabClick("Board");
          }}
          className={`relative cursor-pointer py-2 w-16 text-center ${
            selected === "Board" ? "after:border-b-2 after:border-[#f2545f] after:absolute after:bottom-0 after:content-[\"\"] after:left-0 after:right-0" : ""
          }`}
        >
          Board
        </button>
        <button
          onClick={() => {
            handleTabClick("Graph");
          }}
          className={`relative cursor-pointer py-2 w-16 text-center ${
            selected === "Graph" ? "after:border-b-2 after:border-[#f2545f] after:absolute after:bottom-0 after:content-[\"\"] after:left-0 after:right-0" : ""
          }`}
        >
          Graph
        </button>
        <button
          onClick={() => {
            handleTabClick("Recent");
          }}
          className={`relative cursor-pointer py-2 w-16 text-center ${
            selected === "Recent" ? "after:border-b-2 after:border-[#f2545f] after:absolute after:bottom-0 after:content-[\"\"] after:left-0 after:right-0" : ""
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
