import EntryForm from "@/app/entryForm";

export default function Page() {
    return (
        <main id="home-grid">
            <div id="h-g-welc" className={"flex justify-center items-center flex-col"}>
                <p className={"text-6xl font-bold text-sky-300 mb-3"}>Welcome</p>
                <p className={"text-lg font-bold text-sky-500 text-center"}>Select a station to view live departures.</p>
            </div>

            <div id="h-g-form" className={"flex justify-center items-center w-full h-full drop-shadow-[0_0_400px_#0000ff]"}>
                <div className={"flex justify-center items-center w-full max-w-[500px] h-full rounded-3xl bg-gray-900"}>
                    <EntryForm />
                </div>
            </div>
        </main>
    )
}