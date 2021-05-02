const Header = ({ theme, toggleTheme, isLight }) => {
	return (
		<header>
			<h1 style={{ color: theme.h1Title }}>Todo List</h1>
			<button onClick={toggleTheme}>
				Passer en mode {isLight ? "Dark" : "Light"} Mode
			</button>
		</header>
	);
};

export default Header;
