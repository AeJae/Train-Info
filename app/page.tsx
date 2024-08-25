import { ErrorInfo, NoServices } from "@/app/splashscreen";
import InfoPanel from "@/app/infoPanel";
import { HomeTitle } from "@/app/nav";
import React from "react";

// EUS COV TWY RDG KGX STP PAD SWI BRI
const CRS = "PAD";

const username = "rttapi_ae_jae";
const password = "6093bb063b6182aeafb406be78fee0bc34f01dfc";
const headers = new Headers();
headers.append('Authorization', 'Basic ' + btoa(`${username}:${password}`));

export async function getData(station: string) {
    // Fetches all departures from this station up to 4 hours from now
    const response = await fetch(`https://api.rtt.io/api/v1/json/search/${station}`, {headers: headers, cache: "no-cache"});
    return await response.json();
}

export async function getServiceInfo(serviceUid: string, runDate: string) {
    const d = runDate.split("-");
    const response = await fetch(`https://api.rtt.io/api/v1/json/service/${serviceUid}/${d[0]}/${d[1]}/${d[2]}`, {headers: headers, cache: "no-cache"});
    return await response.json();
}

function isThisStation(station: any) {return station.crs === CRS}

export default async function Home() {
    try {
        const data = await getData(CRS);
        const stationName = data.location.name;
        let items: React.JSX.Element[] = [];
        let serviceCount = 0;

        try {
            for (const service of data.services) {
                const id = service.serviceUid;
                const runDate = service.runDate;
                const info = await getServiceInfo(id, runDate);

                if (info.isPassenger && info.serviceType === "train") {
                    serviceCount++;
                    const thisLocation = info.locations[info.locations.findIndex(isThisStation)];
                    // Departure timings
                    const eDep = thisLocation.realtimeDeparture;
                    const sDep = thisLocation.gbttBookedDeparture;
                    const canc = thisLocation.cancelReasonShortText;
                    // Destination
                    const dest = info.destination[0].description;
                    // Platform number
                    const plat = thisLocation.platform;
                    const pCnf = thisLocation.platformConfirmed;

                    items.push(<InfoPanel key={id} eDep={eDep} sDep={sDep} canc={canc} dest={dest} plat={plat} pCnf={pCnf}/>);
                }
            }
            if (serviceCount === 0) return <NoServices station={stationName} />;
            return (
                <main>
                    <HomeTitle name={stationName}/>
                    <div id="services">
                        {items}
                    </div>
                </main>
            );
        } catch (e: any) {
            if (e.toString() === "TypeError: data.services is not iterable") {
                return <NoServices station={stationName} />
            } else {
                return <ErrorInfo e={e} source={"Home -> Services Iteration Try-Catch"} />
            }
        }
    } catch (e: any) {
        return <ErrorInfo e={e} source={"Home -> Try-Catch"} />;
    }
}
