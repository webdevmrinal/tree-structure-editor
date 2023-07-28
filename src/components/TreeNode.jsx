import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import React, { useState } from "react";
import { BiSolidAddToQueue } from "react-icons/bi";
import {
  HiChevronDown,
  HiChevronRight,
  HiOutlineDotsVertical,
  HiPlus,
} from "react-icons/hi";

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

  return (
    <div
      className={
        node.id === selectedNodeId
          ? "border-l-2 border-[#f2545f] bg-gray-100"
          : ""
      }
    >
      <div
        style={{
          paddingLeft: `${!level ? 0 : 1}rem`,
          paddingRight: "0px",
          width: "100%",
        }}
      >
        <div className="py-1">
          <div
            className={
              node.type === "container" && childIsSelected
                ? "bg-gray-100 font-semibold w-full flex justify-between items-center"
                : "w-full flex justify-between items-center"
            }
          >
            <div
              className={
                node.type === "container"
                  ? "font-semibold w-full cursor-pointer"
                  : "w-full cursor-pointer"
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
              <div className="select-none inline-block">{node.name}</div>
            </div>
            {node.type === "container" && childIsSelected ? (
              <div className="flex gap-3">
                <Tippy content="Create Item">
                  <button>
                    <HiPlus color="#777" />
                  </button>
                </Tippy>
                <button>
                  <BiSolidAddToQueue color="#777" />
                </button>
                <button>
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
            />
          ))}
      </div>
    </div>
  );
}

export default TreeNode;
