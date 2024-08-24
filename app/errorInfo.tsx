import Image from "next/image";

export default function ErrorInfo({e, source}: {e: any, source: string}) {
    return (
        <div className={"flex justify-center items-center h-dvh"}>
            <div className={"flex flex-col bg-red-950 justify-center rounded-xl px-8"} style={{width: "500px", height: "500px", filter: "drop-shadow(0 0 250px #840000ff)"}}>
                <Image src={"Antu_dialog-warning.svg"} alt={"Warning icon"} width={100} height={100}/>
                <p className={"mt-2 text-2xl text-amber-400"}>That's an error.</p>
                <p className={"mt-12 border-l-2 border-l-red-500 pl-4 text-red-500"}>{e.toString()}</p>
                <p className={"mt-4 border-l-2 border-l-red-400 pl-4 text-red-400"}>Source: {source}</p>
            </div>
        </div>
    )
}