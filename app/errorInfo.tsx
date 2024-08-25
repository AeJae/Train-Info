import Image from "next/image";

export default function ErrorInfo({e, source}: {e: any, source: string}) {
    return (
        <div className={"flex justify-center items-center h-dvh"}>
            <div className={"flex flex-col bg-red-950 justify-center rounded-xl px-8 w-[500px] h-[500px] drop-shadow-[0_0_250px_#840000]"}>
                <Image src={"warning.svg"} alt={"Warning icon"} width={100} height={100}/>
                <p className={"mt-2 text-2xl text-amber-400"}>That's an error.</p>
                <p className={"mt-12 border-l-2 border-l-red-500 pl-4 text-red-500"}>{e.toString()}</p>
                <p className={"mt-4 border-l-2 border-l-red-400 pl-4 text-red-400"}>Source: {source}</p>
            </div>
        </div>
    )
}