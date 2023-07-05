import { useState } from "react";
import ToggleBtn from "./ToggleBtn";

const Box = ({ children }) => {
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <ToggleBtn
        className="btn-toggle"
        action={() => setIsOpen2(open => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </ToggleBtn>
      {isOpen2 && children}
    </div>
  );
};
export default Box;
