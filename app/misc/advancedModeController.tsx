'use client'

import {useState} from "react";
import {useRouter} from "next/navigation";

export default function AdvancedModeController() {
    const [showAdvanced, setShowAdvanced] = useState(false);
    const [showError, setShowError] = useState(false);
    const [userCRS, setUserCRS] = useState("");
    const router = useRouter();

    function handleClick() {
        setShowAdvanced(!showAdvanced);
    }

    function handleText(e: any) {
        setShowError(false);
        setUserCRS(e.target.value.toUpperCase());
    }

    function view(ver: string) {
        if (userCRS.length === 3) {
            router.push(`/${ver}/${userCRS.toLowerCase()}`);
        } else {
            setShowError(true);
        }
    }

    return (
        <>
            {showAdvanced && (
                <>
                <input type={"text"} onChange={handleText} placeholder={"Enter CRS"} value={userCRS} className={"text-center bg-transparent border border-sky-500 p-1 rounded-md outline-none text-sky-500 placeholder:text-gray-500"}></input>
                {showError && (<p className={"text-sm -mb-1 text-red-900"}>CRS must be 3 letters.</p>)}
                <div className={"flex w-48 justify-evenly"}>
                    <button onClick={() => {view("v2")}} className={"text-sm w-20 underline mt-1 text-gray-600 select-none"}>View Tiles</button>
                    <button onClick={() => {view("v1")}} className={"text-sm w-20 underline mt-1 text-gray-600 select-none"}>View Board</button>
                </div>
                </>
            )}
            <button onClick={handleClick} className={"text-sm mt-3 underline text-gray-900"}>{showAdvanced?"Hide":"Show"} Advanced</button>
        </>
    )
}