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
        <form className={"flex flex-col justify-center items-center"} onSubmit={handleSubmit}>
            <div>
                <button className={"border border-teal-600 rounded-l-md " + (buttonSide === "left" ? "bg-teal-600 text-white" : "bg-white text-teal-500") + " w-24"}
                        onClick={handleClickLeft}>Tiles
                </button>

                <button className={"border border-teal-600 rounded-r-md " + (buttonSide === "right" ? "bg-teal-600 text-white" : "bg-white text-teal-500") + " w-24"}
                        onClick={handleClickRight}>Board
                </button>
            </div>
            <select id="select"
                    className={"border border-teal-600 outline-none text-black rounded-md text-lg my-4 w-96"}>
                <option value={"eus"}>London Euston</option>
                <option value={"pad"}>London Paddington</option>
                <option value={"kgx"}>London Kings Cross</option>
                <option value={"cov"}>Coventry</option>
                <option value={"twy"}>Twyford</option>
                <option value={"rdg"}>Reading</option>
                <option value={"stp"}>St Pancras</option>
                <option value={"nrw"}>Norwich</option>
            </select>
            <input type={"submit"} value={"Go"} className={"cursor-pointer border border-teal-600 w-24 rounded-md bg-white text-teal-600"} />
        </form>
    )
}