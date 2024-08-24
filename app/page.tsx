import { HomeTitle } from "@/app/nav";
import React from "react";

const username = "rttapi_ae_jae";
const password = "6093bb063b6182aeafb406be78fee0bc34f01dfc";
const headers = new Headers();
headers.append('Authorization', 'Basic ' + btoa(`${username}:${password}`));

export async function getData(station: string) {
    const response = await fetch(`https://api.rtt.io/api/v1/json/search/${station}`, {headers: headers});
    return await response.json();
}

export default async function Home() {
    const data = await getData("EUS");
    const stationName = data.location.name
    let items: React.JSX.Element[] = [];

    data.services.forEach((service: any) => {
        const id = service.serviceUid;
        items.push(<p className={"text-xl"} key={id}>{id} to</p>)
        console.log(id);
    })

    return (
        <main>
            <HomeTitle name={`Live Departures from ${stationName}`}/>
            <div id="services">
                {items}
            </div>
        </main>
    );
}
