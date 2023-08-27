const withExtraProp = WrappedComponent => {
  return function withExtraProp(props) {
    return <WrappedComponent extraProp='hello world' {...props} />;
  };
};

const HOC = ({ extraProp }) => {
  return <div>{extraProp}</div>;
};

const MyComponentWithExtraProp = withExtraProp(HOC);
export default MyComponentWithExtraProp;
