import React, { useRef } from "react";
import Fchild from "./Fchild";

const Fparent = () => {
  const childRef = useRef();

  return (
    <div>
      <Fchild ref={childRef} />
      <button onClick={() => (childRef.current.innerText = 143)}>
        clickme
      </button>
    </div>
  );
};

export default Fparent;
