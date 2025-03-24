// Define reusable setItem and getItem function for local storage
// with error handling that will display error on the console
export const setItem = (key : string, value: unknown) => {
    try {
        localStorage.setItem(key, JSON.stringify(value))
    } catch(error) {
        console.log("Item could not be set. Displayed this error:", error)
    }
}

export const getItem = (key : string) => {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : [];
    }
    catch(error){
        console.log("Item could not be found. Error: ", error)
    }
}
