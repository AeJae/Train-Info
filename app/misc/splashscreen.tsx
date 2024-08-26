import Image from "next/image";
import Link from "next/link";

export function ErrorInfo({e, source}: {e: any, source: string}) {
    return (
        <div className={"flex justify-center items-center h-dvh"}>
            <div className={"flex flex-col bg-red-950 py-8 rounded-xl px-8 w-[500px] h-[500px] drop-shadow-[0_0_250px_#840000]"}>
                <Link href={"/"} className={"text-sm text-red-400"}>{"<-"} Home</Link>
                <div className={"flex flex-col my-auto"}>
                    <Image src={"/warning.svg"} alt={"Warning icon"} width={100} height={100}/>
                    <p className={"mt-2 text-2xl text-amber-400"}>That's an error.</p>
                    <p className={"mt-12 border-l-2 border-l-red-500 pl-4 text-red-500"}>{e.toString()}</p>
                    <p className={"mt-4 border-l-2 border-l-red-400 pl-4 text-red-400"}>Source: {source}</p>
                </div>
            </div>
        </div>
    )
}

export function NoServices({station}: {station: string}) {
    return (
        <div className={"flex flex-col justify-center items-center h-dvh"}>
            <div className={"flex flex-col bg-blue-950 py-8 rounded-xl px-8 w-full sm:w-[500px] h-[500px] drop-shadow-[0_0_250px_#000084]"}>
                <Link href={"/"} className={"text-sm text-blue-400"}>{"<-"} Home</Link>
                <div className={"flex flex-col my-auto"}>
                    <p className={"text-2xl sm:text-3xl text-blue-400"}>No Information Available</p>
                    <p className={"mt-5 border-l-2 border-l-blue-400 pl-4 text-blue-400"}>{station} has no departures.</p>
                </div>
            </div>
        </div>
    )
}