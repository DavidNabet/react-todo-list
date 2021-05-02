const Header = ({ theme, toggleTheme }) => {
	return (
		<header>
			<h1 style={{ color: theme.h1Title }}>Todo List</h1>
			<button onClick={toggleTheme}>Passer en mode Dark Mode</button>
		</header>
	);
};

export default Header;
