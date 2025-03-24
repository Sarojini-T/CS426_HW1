import { createContext } from "react";
import { themeContextType } from "./NavigationBar";

// Context for the website theme
export const WebsiteThemeContext = createContext<themeContextType>({
    theme: "",
    setTheme: () => {},
  });