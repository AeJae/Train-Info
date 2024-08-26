export default function Loading() {
    return (
        <>
            <nav className="flex h-16 w-full bg-teal-600 justify-center items-center md:text-4xl sm:text-xl overflow-hidden text-nowrap">
                <p id="titleText">Fetching Departures</p>
            </nav>
            <p className={"text-xl"}>Please wait...</p>
        </>
    )
}