import {HomeTitle} from "@/app/nav";
import InfoPanel from "@/app/infoPanel"
import React from "react";

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

export default async function Home() {
    const data = await getData("EUS");
    const stationName = data.location.name;
    let items: React.JSX.Element[] = [];

    for (const service of data.services) {
        const id = service.serviceUid;
        const runDate = service.runDate;
        const info = await getServiceInfo(id, runDate);

        if (info.isPassenger) {
            const dest = info.destination[0].description
            const plat = info.locations[0].platform
            items.push(<InfoPanel key={id} num={id} dest={dest} plat={plat}/>)
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
