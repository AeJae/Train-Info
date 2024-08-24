export default function NoServices({station}: {station: string}) {
    return (
        <div className={"flex justify-center items-center h-dvh"}>
            <div className={"flex flex-col bg-blue-950 justify-center rounded-xl px-8"}
                 style={{width: "500px", height: "500px", filter: "drop-shadow(0 0 250px #000084ff)"}}>
                <p className={"mt-2 text-3xl text-blue-400"}>No Information Available</p>
                <p className={"mt-5 border-l-2 border-l-blue-400 pl-4 text-blue-400"}>{station} has no departures.</p>
            </div>
        </div>
    )
}