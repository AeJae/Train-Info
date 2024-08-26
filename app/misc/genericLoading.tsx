// Uses React Spinners (https://mhnpd.github.io/react-loader-spinner)
'use client'

import {Triangle} from "react-loader-spinner";

export function TriangleLoader() {
    return (
        <div className={"flex flex-col mt-20 w-full justify-center items-center"}>
            <Triangle
                visible={true}
                height={80}
                width={80}
                color={"#0d9489"}
                ariaLabel={"triangle-loading"}
                wrapperStyle={{}}
                wrapperClass=""
            />
            <p className={"text-xl"}>Please wait...</p>
        </div>
    )
}