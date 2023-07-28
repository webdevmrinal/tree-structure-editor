import React, { useState } from "react";
import { BiSolidAddToQueue } from "react-icons/bi";
import { HiChevronDown, HiChevronRight, HiPlus } from "react-icons/hi";

function TreeNode({ node, level, selectedNodeId, setSelectedNodeId }) {
  const [isOpen, setIsOpen] = useState(node.isOpen);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleNodeSelect = () => {
    setSelectedNodeId(node.id);
  };

  const childIsSelected =
    node.type === "container" &&
    node.children &&
    node.children.some((child) => child.id === selectedNodeId);

  console.log(selectedNodeId);

  return (
    <div
      style={{ paddingLeft: `${level * 1}rem`, paddingRight: "0px" }}
      className={
        node.id === selectedNodeId
          ? "border-l-2 border-[#f2545f] bg-gray-200"
          : ""
      }
    >
      <div className="py-1">
        <div
          className={
            node.type === "container" && childIsSelected
              ? "bg-gray-200 font-semibold w-full flex justify-between items-center"
              : "w-full flex justify-between items-center"
          }
        >
          <div
            className={
              node.type === "container"
                ? "font-semibold py-1 w-full cursor-pointer"
                : "w-full p-1 cursor-pointer"
            }
            onClick={
              node.type === "container" ? handleToggle : handleNodeSelect
            }
          >
            {node.type === "container" ? (
              isOpen ? (
                <HiChevronDown className="inline-block" />
              ) : (
                <HiChevronRight className="inline-block" />
              )
            ) : null}
            <span className="select-none">{node.name}</span>
          </div>
          {node.type === "container" && childIsSelected ? (
            <div className="flex gap-3">
              <HiPlus color="#777" />
              <BiSolidAddToQueue color="#777" />
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
          />
        ))}
    </div>
  );
}

export default TreeNode;
