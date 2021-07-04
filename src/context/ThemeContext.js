import React, { createContext, useState } from "react";
import { themes } from "../utils";

export const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {
	const [isLight, setIsLight] = useState(true);

	const toggleTheme = () => {
		setIsLight(!isLight);
	};

	return (
		<ThemeContext.Provider value={{ ...themes.themes, isLight, toggleTheme }}>
			{props.children}
		</ThemeContext.Provider>
	);
};
