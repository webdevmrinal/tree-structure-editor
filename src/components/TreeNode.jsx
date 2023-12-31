import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useState } from "react";
import { BiSolidAddToQueue } from "react-icons/bi";
import {
  HiChevronDown,
  HiChevronRight,
  HiOutlineDotsVertical,
  HiPlus,
} from "react-icons/hi";
import { v4 as uuidv4 } from "uuid";

function TreeNode({
  node,
  level,
  selectedNodeId,
  setSelectedNodeId,
  addLeafToNode,
  setSelectedNode,
  addContainerToNode,
}) {
  const [isOpen, setIsOpen] = useState(node.isOpen);
  const [isAddNodeMenuVisible, setIsAddNodeMenuVisible] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleNodeSelect = () => {
    setSelectedNode(node);
    setSelectedNodeId(node.id);
  };

  const handleAddLeaf = () => {
    const newLeaf = {
      id: uuidv4(),
      name: "New Leaf",
      type: "leaf",
      children: [],
    };
    addLeafToNode(node.id, newLeaf);
    setIsAddNodeMenuVisible(!isAddNodeMenuVisible);
  };

  const handleAddContainer = () => {
    const containerCount = node.children.filter(
      (child) => child.type === "container"
    ).length;
    const newContainer = {
      id: uuidv4(),
      type: "container",
      name: `Container ${level + 1}.${
        node.children.filter((child) => child.type === "container").length + 1
      }`,
      isOpen: false,
      children: [],
    };
    addContainerToNode(node.id, newContainer);
    setIsAddNodeMenuVisible(!isAddNodeMenuVisible);
  };

  const handleAddElement = () => {
    setIsAddNodeMenuVisible(!isAddNodeMenuVisible);
  };

  const childIsSelected =
    node.type === "container" &&
    node.children &&
    node.children.some((child) => child.id === selectedNodeId);

  return (
    <div
      className={
        node.id === selectedNodeId ? "relative bg-gray-100" : "relative"
      }
      style={{
        textIndent: `${!level ? 0 : level * 0.75}rem`,
        paddingRight: "0px",
        width: "100%",
      }}
    >
      {node.id === selectedNodeId && (
        <div
          className="absolute left-0 w-0.5 bg-[#f2545f] h-full"
          style={{ content: '""' }}
        ></div>
      )}
      <div className="py-1">
        <div
          className={
            node.type === "container" && childIsSelected
              ? "bg-gray-100 font-semibold w-full flex justify-between items-center group"
              : "w-full flex justify-between items-center group"
          }
        >
          <div
            className={
              node.type === "container"
                ? "font-semibold h-8 leading-8 w-full cursor-pointer"
                : "w-full cursor-pointer translate-x-1"
            }
            onClick={
              node.type === "container" ? handleToggle : handleNodeSelect
            }
          >
            {node.type === "container" ? (
              isOpen ? (
                <HiChevronDown
                  style={{
                    transform: `translateX(${!level ? 0 : level * 0.75}rem)`,
                  }}
                  size={10}
                  className="inline-block"
                />
              ) : (
                <HiChevronRight
                  style={{
                    transform: `translateX(${!level ? 0 : level * 0.75}rem)`,
                  }}
                  size={10}
                  className="inline-block"
                />
              )
            ) : null}
            <div className="select-none inline-block text-sm">{node.name}</div>
          </div>
          {node.type === "container" ? (
            <div className="flex pr-2 relative opacity-[0.000000001] group-hover:opacity-100">
              {isAddNodeMenuVisible ? (
                <div className="absolute -bottom-14 -left-10 z-10 flex flex-col gap-1 w-28 text-xs bg-gray-800 rounded-md overflow-hidden">
                  <button
                    onClick={handleAddLeaf}
                    className="w-full hover:bg-gray-700 py-1"
                  >
                    <div className="text-gray-100 font-normal">Add Leaf</div>
                  </button>
                  <button
                    onClick={handleAddContainer}
                    className="w-full hover:bg-gray-700 py-1"
                  >
                    <div className="text-gray-100 font-normal">
                      Add Container
                    </div>
                  </button>
                </div>
              ) : null}
              <Tippy content="Create Item">
                <button className="px-2" onClick={handleAddElement}>
                  <HiPlus color="#777" />
                </button>
              </Tippy>
              <button className="px-2">
                <BiSolidAddToQueue color="#777" />
              </button>
              <button className="pl-1">
                <HiOutlineDotsVertical color="#333" />
              </button>
            </div>
          ) : null}
        </div>
      </div>
      {isOpen &&
        node.children &&
        node.children.map((childNode) => (
          <TreeNode
            key={childNode.id}
            node={childNode}
            level={level + 1}
            selectedNodeId={selectedNodeId}
            setSelectedNodeId={setSelectedNodeId}
            setSelectedNode={setSelectedNode}
            addLeafToNode={addLeafToNode}
            addContainerToNode={addContainerToNode}
          />
        ))}
    </div>
  );
}

export default TreeNode;
