const elementProps = { className: "greeting", children: "Hello world!" };
const elementType = "h2";
const element = React.createElement(elementType, elementProps);
ReactDOM.render(element, document.getElementById("root"));
