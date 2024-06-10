import React from "react";

const FunctionalComponent = () => {
    const [data, setData] = React.useState("react native");

    const handleClick = (course) => {
        console.log("This is onClick event!")
        setData("angular")
    }

    console.log(data)

    return(
        <div>
            <p className="py-4"><u>This is a functional component. </u></p>

            <button type="button" onClick={() => handleClick("vue")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Click Me !</button>

            <p>State: {data}</p>
        </div>
    )
}

export default FunctionalComponent;