export default function BlankInfoTile() {
    return (
        <div className={"tile grid grid-cols-3 grid-rows-4 h-56 bg-gray-600 m-2 rounded-2xl opacity-70"}>
            <div className={"tile-top text-2xl sDep border-r border-gray-700"}></div>
            <div className={"tile-top md:text-2xl sm:text-xl overflow-hidden text-nowrap eDep"}></div>
            <div className={"tile-top text-2xl plat border-l border-gray-700"}></div>

            <div className={"tile-row dest"}>
                <span className={"text-xs mt-1 w-5"}>To</span>
            </div>

            <div className={"tile-row atoc"}>
                <span className={"text-xs mt-1 w-5"}>By</span>
            </div>

            <div className={"tile-row notes text-gray-400"}>
                <span className={"text-xs w-5"}>{"->"}</span>Loading...
            </div>
        </div>
    )
}