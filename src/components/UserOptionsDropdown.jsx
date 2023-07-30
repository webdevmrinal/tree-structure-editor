import { FormCheck } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function UserOptionsDropdown({ setUserDropdownVisible }) {
  return (
    <div className="absolute right-0 translate-y-2 w-64 bg-white border py-2 shadow-md z-[9999]">
      <div className="cursor-pointer px-6 py-2 flex justify-between">
        <span>{"Dark Mode"}</span>
        <span>
          <FormCheck
            id="switchEnabled"
            type="switch"
            onChange={() => {
              setUserDropdownVisible(true);
            }}
          />
        </span>
      </div>
      <div className="cursor-pointer px-4 py-2 border-b">{"Profile"}</div>
      <div className="cursor-pointer px-6 py-2">{"What's new"}</div>
      <div className="cursor-pointer px-6 py-2">{"Help"}</div>
      <div className="cursor-pointer px-6 py-2">{"Send feedback"}</div>
      <div className="cursor-pointer px-4 py-2 border-b">
        {"Hints and shortcuts"}
      </div>
      <div className="cursor-pointer px-6 py-2">{"Log out"}</div>
    </div>
  );
}

export default UserOptionsDropdown;
