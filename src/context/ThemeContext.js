import React, { createContext } from "react";
import { themes } from "../utils";

export const ThemeContext = createContext();

export class ThemeContextProvider extends React.Component {
	state = {
		isLight: true,
		...themes.themes,
	};

	toggleTheme = () => {
		this.setState({ isLight: !this.state.isLight });
	};

	render() {
		return (
			<ThemeContext.Provider
				value={{ ...this.state, toggleTheme: this.toggleTheme }}
			>
				{this.props.children}
			</ThemeContext.Provider>
		);
	}
}
