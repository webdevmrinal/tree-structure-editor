import { useEffect, useState } from "react";
import { HiChevronDoubleLeft, HiPlus } from "react-icons/hi";
import { BiExpandAlt } from "react-icons/bi";
import treeDataStructure from "../utils/treeDataStructure";
import TreeNode from "./TreeNode";
import { v4 as uuidv4 } from "uuid";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

function Drawer({ isDrawerOpen, setIsDrawerOpen }) {
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [tree, setTree] = useState(() => {
    try {
      const savedData = localStorage.getItem("treeData");
      return savedData ? JSON.parse(savedData) : treeDataStructure;
    } catch (error) {
      console.error("Failed to load tree from local storage: ", error);
      return treeDataStructure;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("treeData", JSON.stringify(tree));
    } catch (error) {
      console.log("Failed to save tree to the local storage: ", error);
    }
  }, [tree]);

  const handleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleAddRootContainer = () => {
    const containerCount = tree.filter(
      (node) => node.type === "container"
    ).length;
    const newContainer = {
      id: uuidv4(),
      type: "container",
      name: `container${containerCount + 1}`,
      isOpen: false,
      children: [],
    };
    setTree((prevTree) => [...prevTree, newContainer]);
  };

  //recursive function to add new leaves to the tree
  const addLeafToNode = (nodeId, newLeaf, nodeArray = tree) => {
    for (let node of nodeArray) {
      if (node.id === nodeId && node.type === "container") {
        if (!node.children) node.children = [];
        node.children.push(newLeaf);
        return;
      }
      if (node.children) {
        addLeafToNode(nodeId, newLeaf, node.children);
      }
    }
    setTree([...tree]);
  };

  return (
    <div
      className={
        isDrawerOpen
          ? "h-[calc(100vh-125px)] flex-1 md:flex-[.35] lg:flex-[.20] bg-gray-50 pr-2 lg:px-"
          : "hidden"
      }
    >
      <div className="w-80 md:w-96 h-[calc(100vh-125px)] overflow-x-auto overflow-y-scroll scrollbar-thin scrollbar-track-gray-200/20 scrollbar-thumb-gray-200">
        <div className="px-4 py-4 bg-gray-50 lg:px-0 lg:pl-4 flex justify-between items-center border-b sticky top-0 z-10">
          <div className="uppercase text-gray-400 font-bold">{"dfin"}</div>
          <div className="flex gap-2 lg:gap-4">
            <Tippy content="Add Container">
              <button onClick={handleAddRootContainer}>
                <HiPlus size={20} color="#f2545f" />
              </button>
            </Tippy>
            <button>
              <BiExpandAlt size={15} color="#777" />
            </button>
            <button onClick={handleDrawer}>
              <HiChevronDoubleLeft size={20} color="#777" />
            </button>
          </div>
        </div>
        <div className={"pl-2"}>
          {tree.map((node) => (
            <TreeNode
              key={node.id}
              node={node}
              level={0}
              setSelectedNodeId={setSelectedNodeId}
              selectedNodeId={selectedNodeId}
              addLeafToNode={addLeafToNode}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Drawer;
