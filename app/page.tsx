import EntryForm from "@/app/entryForm";

export default function Page() {
    return (
        <main id="home-grid" className={""}>
            <div id="h-g-welc" className={"flex justify-center items-center flex-col"}>
                <p className={"text-5xl font-bold text-teal-500 mb-3"}>Welcome</p>
                <p className={"text-lg font-bold text-sky-500"}>Select a station to view live departures.</p>
            </div>

            <div id="h-g-form" className={"flex flex-col justify-center items-center rounded-3xl bg-gray-300"}>
                <EntryForm />
            </div>
        </main>
    )
}