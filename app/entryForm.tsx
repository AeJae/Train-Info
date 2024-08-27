'use client'

import {useState} from "react";
import {useRouter} from 'next/navigation'

export default function EntryForm() {
    const router = useRouter();
    const [buttonSide, setButtonSide] = useState("left");

    function handleClickLeft(e: any) {
        e.preventDefault();
        setButtonSide("left");
    }

    function handleClickRight(e: any) {
        e.preventDefault();
        setButtonSide("right");
    }

    function handleSubmit(e: any) {
        e.preventDefault();
        const select: HTMLSelectElement | null = document.getElementsByTagName("select")[0]
        if (select) {
            router.push(`/${(buttonSide === "left"?"v2":"v1")}/${select.value}`);
        }
    }

    return (
        <form className={"flex flex-col justify-evenly items-center w-full h-full min-h-48"} onSubmit={handleSubmit}>
            <div>
                <button className={"p-1 border border-sky-500 rounded-l-md hover:drop-shadow-[0_5px_25px_#0070ff30] " + (buttonSide === "left" ? "bg-sky-500 text-white" : "bg-white text-sky-800") + " w-24"}
                        onClick={handleClickLeft}>Tiles
                </button>

                <button className={"p-1 border border-sky-500 rounded-r-md hover:drop-shadow-[0_5px_25px_#0070ff30] " + (buttonSide === "right" ? "bg-sky-500 text-white" : "bg-white text-sky-800") + " w-24"}
                        onClick={handleClickRight}>Board
                </button>
            </div>

            <select id="select" className={"p-2 cursor-pointer border border-sky-500 bg-sky-950 outline-none text-white rounded-md text-lg w-72 sm:w-96"}>
                <option value={"eus"}>London Euston</option>
                <option value={"lbg"}>London Bridge</option>
                <option value={"pad"}>London Paddington</option>
                <option value={"kgx"}>London Kings Cross</option>
                <option value={"stp"}>St Pancras</option>
                <option value={"cov"}>Coventry</option>
                <option value={"nrw"}>Norwich</option>
                <option value={"twy"}>Twyford</option>
                <option value={"rdg"}>Reading</option>
            </select>
            <input type={"submit"} value={"->"} className={"p-1 cursor-pointer border bg-sky-600 border-sky-600 w-24 rounded-md text-white drop-shadow-[0_5px_25px_#00a0ff20] hover:drop-shadow-[0_5px_25px_#0070ff80]"} />
        </form>
    )
}