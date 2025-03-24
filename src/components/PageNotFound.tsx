import { Link } from "react-router-dom";

// This is to handle the case if the user enters a wrong link
// and will display a Page Not Found message with a link to the home page
export const PageNotFound = () => {
    return(
        <>
            <Link to="/">
                <button>Home</button>
            </Link>
            <h1>Page Not found</h1>
        </>  
    );
}