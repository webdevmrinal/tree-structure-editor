import React from "react";

function Editor({ title, node, isDrawerOpen, selectedNodePath }) {
  return (
    <div
      className={
        isDrawerOpen
          ? "flex-[.8] w-[calc(100vw-392px)] overflow-x-scroll scrollbar-none pl-5 md:pl-20 lg:pl-40 pt-3"
          : "flex-1 w-full overflow-x-scroll scrollbar-none pl-5 md:pl-20 lg:pl-40 pt-3"
      }
    >
      <div className="pt-1 pb-3 lg:pt-2 lg:pb-6">
        <span className="text-gray-500 text-sm lg:text-base">{selectedNodePath}</span>
        <button className="text-gray-500 text-sm lg:text-base sm:pl-16">Add item member</button>
      </div>
      <div className="font-extralight text-3xl md:text-5xl">{title}</div>
    </div>
  );
}

export default Editor;
