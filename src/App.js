import React from "react";
import Parent from "./components/reactMemo/Parent";
import ClassBase from "./components/classBase/ClassBase";
import Fparent from "./components/forwordRef/Fparent";
import MyComponentWithExtraProp from "./components/MyComponentWithExtraProp";
import API from "./API";
import ReducerEX from "./components/ReducerEX";
import CounterApp from "./components/simpleRedux/CounterApp";
import UseCallBack from "./components/useCallback/UseCallBack";
import ParentMemo from "./components/useMemo/ParentMemo";
import ParentPortal from "./components/portals/ParentPortal";
import LifeCycle from "./components/lifeCycle/LifeCycle";

const App = () => {
  return (
    <div>
      {/* React.memo */}
      {/* <Parent /> */}

      {/* class base */}
      {/* <ClassBase title={"title"} /> */}

      {/* forwaordRef */}
      {/* <Fparent /> */}

      {/* HOC */}
      {/* <MyComponentWithExtraProp /> */}

      {/* API */}
      {/* <API /> */}

      {/* reducer */}
      {/* <ReducerEX /> */}

      {/* redux simple way */}
      {/* <CounterApp /> */}

      {/* useCallback */}
      {/* <UseCallBack /> */}

      {/* useMemo  */}

      {/* <ParentMemo /> */}

      {/* portals  */}
      {/* <ParentPortal /> */}

      {/* life cycle */}
      <LifeCycle />
    </div>
  );
};

export default App;
