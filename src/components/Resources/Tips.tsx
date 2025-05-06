// This component returns a list of helpful tips for the user
export const Tips = () => {
    return (
        <div className="ml-10">
            <h1 className="dark:text-white"> Tips </h1>
            <li className="dark:text-white">Reduce your use of cars. Try whenever possible 
                <ul>
                    <li className="dark:text-white"> Walking </li>
                    <li className="dark:text-white"> Biking </li>
                    <li className="dark:text-white"> Public Transportation </li>
                </ul>
            </li>
            <li className="dark:text-white">Eat less meat. Try having more plant based foods </li>
            <li className="dark:text-white">Avoid overconsumption 
                <ul>
                    <li className="dark:text-white">Thrift</li>
                    <li className="dark:text-white"> Recycle </li>
                    <li className="dark:text-white"> Mend old clothes and repair old/broken items</li>
                </ul>
            </li>
            <li className="dark:text-white"> Minimize the use of electricity
                <ul>
                    <li className="dark:text-white"> Use natural sunlight</li>
                    <li className="dark:text-white"> Turn lights off</li>
                    <li className="dark:text-white"> Invest in LED lights</li>
                </ul>
            </li>
            <li className="dark:text-white">Reduce your food waste
                <ul>
                    <li className="dark:text-white"> Try composting </li>
                    <li className="dark:text-white"> Plan your meals </li>
                </ul>
            </li>
        </div>
    );
}