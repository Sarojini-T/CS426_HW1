import { NavigationBar } from "./NavigationBar";
import { ThemeButton } from "./ThemeButton";
import homepageImage  from "../assets/Images/homepageImage.jpeg"

// This component will display the homepage, which will be the main page
// the user sees when they log onto the app. It contains the navigation bar
// as well as the website name and an image
const Homepage = () => {
  return (
   <>
      <NavigationBar />
      {/* Container for the title div and the image div to display them side by side */}
      <section className="flex flex-col lg:flex-row md:flex-row sm-flex-col md:h-50vh">
        <div className="w-full h-screen   bg-[#fffaf1] dark:bg-black flex flex-col justify-center items-center">
          <h1 className="dark:text-white">
            MyFootprint
          </h1>
          <ThemeButton /> 
        </div>
        <div>
          <img src={homepageImage} className="w-full h-screen "></img>
        </div>
      </section>
   </>
  );
};

export default Homepage;