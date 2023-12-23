const heading = React.createElement("h1", {}, "Hello World!");
console.log(
  "ReactJs create element creates an JS object of an element! And not an HTML element directly!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
