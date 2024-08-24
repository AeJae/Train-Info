import {HomeTitle} from "@/app/nav";
import InfoPanel from "@/app/infoPanel"
import React from "react";

const CRS = "COV";

const username = "rttapi_ae_jae";
const password = "6093bb063b6182aeafb406be78fee0bc34f01dfc";
const headers = new Headers();
headers.append('Authorization', 'Basic ' + btoa(`${username}:${password}`));

export async function getData(station: string) {
    const response = await fetch(`https://api.rtt.io/api/v1/json/search/${station}`, {headers: headers, cache: "no-cache"});
    return await response.json();
}

export async function getServiceInfo(serviceUid: string, runDate: string) {
    const d = runDate.split("-");
    const response = await fetch(`https://api.rtt.io/api/v1/json/service/${serviceUid}/${d[0]}/${d[1]}/${d[2]}`, {headers: headers, cache: "no-cache"});
    return await response.json();
}

const isThisStation = (station: any) => station.crs === CRS;

export default async function Home() {
    const data = await getData(CRS);
    const stationName = data.location.name;
    let items: React.JSX.Element[] = [];

    for (const service of data.services) {
        const id = service.serviceUid;
        const runDate = service.runDate;
        const info = await getServiceInfo(id, runDate);

        if (info.isPassenger) {
            const thisLocation = info.locations[info.locations.findIndex(isThisStation)];
            // Departure timings
            const eDep = thisLocation.realtimeDeparture;
            const sDep = thisLocation.gbttBookedDeparture;
            const late = +eDep - +sDep;
            const canc = thisLocation.cancelReasonShortText;
            // Destination
            const dest = info.destination[0].description;
            // Platform number
            const plat = thisLocation.platform;
            const pCnf = thisLocation.platformConfirmed;

            items.push(<InfoPanel key={id} num={id} eDep={eDep} sDep={sDep} late={late} canc={canc} dest={dest} plat={plat} pCnf={pCnf}/>);
        }
    }

    return (
        <main>
            <HomeTitle name={stationName}/>
            <div id="services">
                {items}
            </div>
        </main>
    );
}
