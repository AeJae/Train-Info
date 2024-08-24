'use client'

import {useState} from "react";

//create your forceUpdate hook
function useForceUpdate(){
    console.log("Update")
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update state to force render
}

export default function TestModule () {
    // console.log("Clients");
    const [color, setColor] = useState("border-blue-500");

    const forceUpdate = useForceUpdate();

    function getValue(e: any) {
        const tgt = e.target;
        setColor(tgt.options[tgt.options.selectedIndex].value);
    }

    return (
        <>
        <div id="self" className={`w-52 h-52 border-2 ${color}`}></div>
        <button onClick={forceUpdate}>Update</button>
            <select className={"text-red-600"} onChange={getValue}>
                <option value={"border-blue-500"}>Test</option>
                <option value={"border-lime-500"}>Test2</option>
            </select>
        </>
    )
}
