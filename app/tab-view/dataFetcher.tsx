const username = "rttapi_ae_jae";
const password = "6093bb063b6182aeafb406be78fee0bc34f01dfc";
const headers = new Headers();
headers.append('Authorization', 'Basic ' + btoa(`${username}:${password}`));

export interface stnDataInt {
    name: string,
    services: any[]
}

export async function getStnData({crs} : {crs: string}) {
    const rawData = await fetch(`https://api.rtt.io/api/v1/json/search/${crs}`, {headers: headers, cache: "no-cache"});
    const data = await rawData.json();

    const name = data.location.name;
    const services = data.services;

    return {name, services};
}

export async function getSvcData({serviceUid, runDate}: {serviceUid: string, runDate: string}) {
    const d = runDate.split("-");
    const response = await fetch(`https://api.rtt.io/api/v1/json/service/${serviceUid}/${d[0]}/${d[1]}/${d[2]}`, {headers: headers, cache: "no-cache"});
    return await response.json();
}