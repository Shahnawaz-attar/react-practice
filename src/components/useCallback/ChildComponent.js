const ChildComponent = ({ onClick }) => {
  console.log("ChildComponent rendering");
  return <button onClick={onClick}>Increment Count</button>;
};

export default ChildComponent;
