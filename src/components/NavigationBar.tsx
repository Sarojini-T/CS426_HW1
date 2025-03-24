import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { getItem, setItem } from '../utils/localStorage';
import { WebsiteThemeContext } from './ThemeContext';
import { ThemeButton } from './ThemeButton';

// Type for the theme context
export type themeContextType = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

// React Bootstrap navbar that will provide links to all other pages in the app
export const NavigationBar = () => {
  const [theme, setTheme] = useState<string>(() => {
    const isThemeSelected = getItem("theme") != "";
    return isThemeSelected ? getItem("theme")  : "light";
  });
      
        
  useEffect(() => {
    setItem("theme", theme);
    if(theme){
      // When the theme changes, update local storage to its value
      setItem("theme", theme)
      document.body.classList.remove("light", "dark");
      document.body.classList.add(theme); 
      }
  }, [theme]);

  return (
    // Wrap the navigation bar with the website theme context so that all the
    // components within it can access the user's selected theme    
    <WebsiteThemeContext.Provider value={{theme, setTheme}}>
      <Navbar className="bg-[#556B2F] dark:bg-[#033500]" expand="lg">
        <Container>
          <Navbar.Brand className="text-white" as={Link} to="/">MyFootprint</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="text-white" >Home</Nav.Link>
            <Nav.Link as={Link} to="/Tracker" className="text-white" >Tracker</Nav.Link>
            <Nav.Link as={Link} to="/Visuals" className="text-white">Visuals</Nav.Link>
            <Nav.Link as={Link} to="/Resources" className="text-white">Resources</Nav.Link>
            <ThemeButton />
          </Nav>
        </Container>
      </Navbar>
    </WebsiteThemeContext.Provider>
  );
}





