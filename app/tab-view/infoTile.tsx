import {getSvcData} from "@/app/tab-view/dataFetcher";

interface BasicService {
    serviceUid: string,
    runDate: string,
    trainIdentity: string,
    runningIdentity: string,
    atocCode: string,
    atocName: string,
    serviceType: string,
    isPassenger: boolean,
}

interface Pair {
    description: string,
    publicTime: string
}

interface Location {
    crs: string,
    description: string,
    gbttBookedDeparture: string,
    origin: Pair[],
    destination: Pair[],
    realtimeDeparture: string,
    platform: string,
    platformConfirmed: boolean,
    cancelReasonShortText: string | null,
    cancelReasonLongText: string | null
}

interface DetailedService extends BasicService {
    origin: Pair[],
    destination: Pair[],
    locations: Location[]
}

function formatTimeString(timeString: string) {
    return timeString.substring(0, 2) + ":" + timeString.substring(2, 4);
}

export default async function InfoTile({service, crs}: {service: BasicService, crs: string}) {
    const svc: DetailedService = await getSvcData({serviceUid: service.serviceUid, runDate: service.runDate});
    const here: Location = svc.locations[svc.locations.findIndex((stn: Location) => stn.crs === crs)];
    const sDep: string = here.gbttBookedDeparture;
    const eDep: string = here.realtimeDeparture;

    return (
        <div className={"tile grid grid-cols-3 grid-rows-4 h-56 bg-gray-600 m-2 rounded-2xl"}>
            <div className={"tile-top text-2xl sDep border-r border-gray-700"}>{formatTimeString(sDep)}</div>
            <div className={"tile-top text-2xl eDep"}>{formatTimeString(eDep)}</div>
            <div className={"tile-top text-2xl plat border-l border-gray-700"}>Plat {here.platform}</div>

            <div className={"tile-row dest border-gray-700"}>
                <span className={"text-xs mt-1 w-5"}>To</span>{here.destination[0].description}
            </div>

            <div className={"tile-row atoc border-gray-700"}>
                <span className={"text-xs mt-1 w-5"}>By</span>{svc.atocName}
            </div>

            <div className={"tile-row notes border-gray-700 text-gray-400"}>
                <span className={"text-xs w-5"}>{"->"}</span>{here.cancelReasonLongText ? here.cancelReasonLongText : "No additional information."}
            </div>
        </div>
    );
}