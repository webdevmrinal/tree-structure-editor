import React from "react";
import Avatar from "react-avatar";

function CustomAvatar({ isOnline, isNew, name}) {
  return (
    <div className={"relative cursor-pointer"}>
      <Avatar className="text-sm" name={name} size="50" round />
      <div className={isNew?"absolute top-0 uppercase text-xs rounded-3xl text-white font-bold bg-[#f2545f] px-1 border-4 border-white translate-x-8 -translate-y-1":"hidden"}>
        {"new"}
      </div>
      <span className="absolute right-0 -translate-x-[.07rem] translate-y-8">
        <div className="flex items-center justify-center">
          <span className="absolute text-5xl text-white -translate-y-[.17rem]">
            {"●"}
          </span>
          <span className={isOnline?"absolute text-3xl text-[#5eba7d]":"absolute text-3xl text-[#f2545f]"}>{"●"}</span>
        </div>
      </span>
    </div>
  );
}

export default CustomAvatar;
