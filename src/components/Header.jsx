import React from "react";
import {
  HiMenu,
  HiOutlineSearch,
  HiUserAdd,
  HiOutlineBell,
} from "react-icons/hi";
import CustomAvatar from "./CustomAvatar";

function Header() {
  return (
    <div className="max-w-sm mx-auto md:max-w-2xl lg:max-w-7xl">
      <div className="py-4 px-6 lg:px-0 flex md:justify-between">
          <div className="flex gap-4 md:gap-8 items-center">
            <HiMenu size={30} />
            <form className="flex gap-2 items-center">
              <label htmlFor="search">
                <HiOutlineSearch color="#555" size={25} />
              </label>
              <input type="text" id="search" placeholder="dfin" className="w-2/6 md:w-full outline-none" />
            </form>
          </div>
          <div className="flex items-center gap-4 md:gap-8">
            <div className="flex items-center">
              <HiUserAdd size={30} />
              <span className="hidden lg:inline-block uppercase">{"invite team member"}</span>
            </div>
            <HiOutlineBell size={30} />
            <CustomAvatar isNew={true} isOnline={false} name={"F L"} />
          </div>
      </div>
    </div>
  );
}

export default Header;
