import logo from "./logo.svg"; //императивный
import "./App.css"; // императивный
import React from "react"; // императивный

function App() {
	const AppElement = React.createElement(
		"div",
		{ className: "App" },
		React.createElement(
			"header",
			{ className: "App-header" },
			React.createElement("img", {
				className: "App-logo",
				alt: "logo",
				src: logo,
			}),
			React.createElement("p", {}, `Edit src/App.js and save to reload.`),
			React.createElement(
				"a",
				{
					className: "App-link",
					href: "https://reactjs.org",
					target: "_blank",
					rel: "noopener noreferrer",
				},
				"Learn React"
			),
			React.createElement("span", {}, `${new Date().getFullYear()}`)
		)
	);

	console.log(AppElement);
	return AppElement;
} // императивный

export default App; //императивный
