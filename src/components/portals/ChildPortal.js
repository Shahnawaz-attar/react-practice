import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const ChildPortal = ({ children }) => {
  const modelRoot = useRef(document.createElement("div"));
  useEffect(() => {
    document.body.appendChild(modelRoot.current);

    return () => {
      document.body.removeChild(modelRoot.current);
    };
  }, []);

  return ReactDOM.createPortal(children, modelRoot.current);
};

export default ChildPortal;
