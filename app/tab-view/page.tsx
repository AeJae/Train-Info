import {HomeTitle} from "@/app/nav";
import {getStnData, stnDataInt} from "@/app/tab-view/dataFetcher";
import {NoServices} from "@/app/splashscreen";
import InfoTile from "@/app/tab-view/infoTile";

export default async function Page() {
    const CRS: string = "COV";

    const stationInfo: stnDataInt = await getStnData({crs: CRS});
    const services: any[] = stationInfo.services;
    let serviceCount = 0;
    let tiles = [];

    // Check that there are services...
    if (services.length > 0) {
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