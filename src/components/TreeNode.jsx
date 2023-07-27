import React from "react";
import { BiSolidAddToQueue } from "react-icons/bi";
import { HiChevronDown, HiPlus } from "react-icons/hi";

function TreeNode({ node, level, setSelectedNodeId }) {
  return (
    <div style={{ paddingLeft: `${level * 0.75}rem`, paddingRight: "0px" }}>
      <div className="py-1">
        <span className="w-full flex justify-between">
          <div className={node.type === "container" ? "font-semibold" : ""}>
            {node.type === "container" ? (
              <HiChevronDown className="inline-block" />
            ) : null}
            <span>{node.name}</span>
          </div>
          <div className="flex gap-3">
            <HiPlus color="#777" />
            <BiSolidAddToQueue color="#777" />
          </div>
        </span>
      </div>
      {node.children &&
        node.children.map((childNode) => (
          <TreeNode
            key={childNode.id}
            node={childNode}
            level={level + 1}
            setSelectedNodeId={setSelectedNodeId}
          />
        ))}
    </div>
  );
}

export default TreeNode;
