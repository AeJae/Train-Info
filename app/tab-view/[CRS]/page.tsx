import {HomeTitle} from "@/app/nav";
import {getStnData, stnDataInt} from "@/app/tab-view/[CRS]/dataFetcher";
import {ErrorInfo, NoServices} from "@/app/splashscreen";
import InfoTile from "@/app/tab-view/[CRS]/infoTile";

export async function generateMetadata({ params }: {params: { CRS: string }}) {
    return {
        title: `${params.CRS.toUpperCase()} Live Departures`
    }
}

export default async function Page({ params }: {params: { CRS: string }}) {
    // EUS COV TWY RDG KGX STP PAD SWI BRI NRW
    const CRS: string = params.CRS.toUpperCase();

    const stationInfo: stnDataInt = await getStnData({crs: CRS});
    const services: any = stationInfo.services;
    let serviceCount = 0;
    let tiles = [];

    // Show a splashscreen if there are any errors...
    if (services === "ERROR") return <ErrorInfo e={stationInfo.name} source={"dataFetcher.tsx -> Unknown Error"} />;
    if (services === "NOT_FOUND") return <ErrorInfo e={stationInfo.name} source={"dataFetcher.tsx -> NOT_FOUND"} />;
    if (services === "BAD_CRS") return <ErrorInfo e={stationInfo.name} source={"dataFetcher.tsx -> BAD_CRS"} />;

    // Check that there are services...
    if (services && services.length > 0) {
        // If there are, loop through them all...
        for (const service of services) {
            // We only care about services that are passenger trains (not buses, freight trains, etc)...
            if (service.serviceType === "train" && service.isPassenger) {
                serviceCount++;
                tiles.push(<InfoTile key={serviceCount} service={service} crs={CRS}/>)
            }
        }
        // If there are only non-train services, show the no services screen.
        if (serviceCount === 0) return <NoServices station={stationInfo.name} />;

        return (
            <>
                <HomeTitle name={stationInfo.name} />
                <div className={"mt-1 grid justify-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 text-xl"}>
                    {tiles}
                </div>
            </>
        )

    // If there aren't any, show the no services screen.
    } else return <NoServices station={stationInfo.name} />;
}