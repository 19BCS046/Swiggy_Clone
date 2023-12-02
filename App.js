const main=React.createElement("div",{id:"grandParent"},[
React.createElement("div",{id:"parent"},
React.createElement("h1",{id:"child"},"I am the child"),React.createElement("h2",{id:"second_child"},"I am the second Child "))]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(main);