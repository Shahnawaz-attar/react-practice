import React, { useState } from "react";
import ChildPortal from "./ChildPortal";

const ParentPortal = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div>
      <h1>Portals in React example</h1>
      <br />
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? "hide" : "show"}
      </button>

      {isShow && (
        <ChildPortal>
          <h1>my model </h1>
        </ChildPortal>
      )}
    </div>
  );
};

export default ParentPortal;
