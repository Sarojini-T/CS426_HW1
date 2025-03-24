import { useContext} from "react";
import { themeContextType} from "./NavigationBar";
import { WebsiteThemeContext } from "./ThemeContext";

// This component will be in the navBar so that it can be used in all
// the pages of the app and will allow the user to select light or dark mode
export const ThemeButton = () => {
  const { theme, setTheme }: themeContextType = useContext(WebsiteThemeContext);

  const handleClick = () => {
      if (theme == "light") {
        setTheme(() => "dark")
      
      } else if( theme == "dark") {
        setTheme(() => "light")
      }
    }

  // Conditionally render a button that will switch to the other theme
  // so if the theme is light, display the dark mode button and vice versa
  if (theme == "light") {
    return (
      <button className="border bg-[#fffaf1]" value="dark" onClick={() => handleClick()}>
        Dark Mode
      </button>
    );
  } else if(theme == "dark") {
    return (
      <button className="border bg-[#fffaf1]" value="light" onClick={() => handleClick()}>
        Light Mode
      </button>
    );
  }
};