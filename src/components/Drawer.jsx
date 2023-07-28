import React, { useState } from "react";
import { HiChevronDoubleLeft, HiPlus } from "react-icons/hi";
import { BiExpandAlt } from "react-icons/bi";
import treeDataStructure from "../utils/treeDataStructure";
import TreeNode from "./TreeNode";

function Drawer({ isDrawerOpen, setIsDrawerOpen }) {
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const tree = treeDataStructure;
  const handleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div
      className={
        isDrawerOpen
          ? "h-[calc(100vh-125px)] flex-1 md:flex-[.35] lg:flex-[.20] bg-gray-100 pr-2 lg:px-"
          : "hidden"
      }
    >
      <div className="w-72 h-[calc(100vh-125px)] overflow-scroll">
        <div className="px-4 py-4 lg:px-0 lg:pl-4 flex justify-between items-center">
          <div className="uppercase text-gray-400 font-bold">{"dfin"}</div>
          <div className="flex gap-2 lg:gap-4">
            <button>
              <HiPlus size={20} color="#f2545f" />
            </button>
            <button>
              <BiExpandAlt size={15} color="#777" />
            </button>
            <button onClick={handleDrawer}>
              <HiChevronDoubleLeft size={20} color="#777" />
            </button>
          </div>
        </div>
        <div className="pl-2">
          {tree.map((node) => (
            <TreeNode
              key={node.id}
              node={node}
              level={0}
              setSelectedNodeId={setSelectedNodeId}
              selectedNodeId={selectedNodeId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Drawer;
