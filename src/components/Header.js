import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useDimensions from "../utils/useDimensions";

const Header = ({ theme, toggleTheme, isLight }) => {
  const dimensions = useDimensions();

  const handleMobile = () => {
    if (dimensions.width < 480) {
      return (
        <>
          {isLight ? (
            <FontAwesomeIcon icon={["fas", "moon"]} />
          ) : (
            <FontAwesomeIcon icon={["fas", "sun"]} />
          )}
        </>
      );
    } else {
      return <>Passer en mode {isLight ? "Dark" : "Light"} Mode</>;
    }
  };

  return (
    <header>
      <h1 style={{ color: theme.h1Title }}>Todo List</h1>
      <button onClick={toggleTheme}>{handleMobile()}</button>
    </header>
  );
};

export default Header;
