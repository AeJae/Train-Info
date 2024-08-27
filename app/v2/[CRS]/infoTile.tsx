import {BasicService, DetailedService, Location} from "@/app/misc/interfaces";
import {getSvcData} from "@/app/v2/[CRS]/dataFetcher";

function formatTimeString(timeString: string) {
    return timeString.substring(0, 2) + ":" + timeString.substring(2, 4);
}

export default async function InfoTile({service, crs}: {service: BasicService, crs: string}) {
    const svc: DetailedService = await getSvcData({serviceUid: service.serviceUid, runDate: service.runDate});
    const here: Location = svc.locations[svc.locations.findIndex((stn: Location) => stn.crs === crs)];
    const sDep: string = here.gbttBookedDeparture; // Scheduled departure
    const eDep: string = here.realtimeDeparture; // Estimated departure

    let staCol: string = " text-green-500";
    let staStr: string = "On Time";
    let addStr: string = "No additional information.";
    if (here.cancelReasonLongText) {
        staCol = " text-red-500";
        staStr = "Cancelled";
        addStr = `Due to ${here.cancelReasonLongText}.`;
    } else {
        if (+eDep - +sDep !== 0) { // If not expected to arrive on time...
            staCol = " text-amber-500";
            if (eDep) {
                staStr = "Exp " + formatTimeString(eDep);
                addStr = "This service is delayed.";
            } else {
                addStr = "Live information unavailable.";
                staCol = " text-gray-400";
                staStr = "No Info";
            }
        }
    }

    return (
        <div className={"tile grid grid-cols-3 grid-rows-4 h-56 bg-gray-600 m-2 rounded-2xl"}>
            <div className={"tile-top text-2xl sDep border-r border-gray-700"}>{formatTimeString(sDep)}</div>
            <div className={"tile-top md:text-2xl sm:text-xl overflow-hidden text-nowrap eDep"+staCol}>{staStr}</div>
            <div className={"tile-top text-2xl plat border-l border-gray-700"}>Plat {here.platform}</div>

            <div className={"tile-row dest"}>
                <span className={"text-xs mt-1 w-5"}>To</span>{here.destination[0].description}
            </div>

            <div className={"tile-row atoc"}>
                <span className={"text-xs mt-1 w-5"}>By</span>{svc.atocName}
            </div>

            <div className={"tile-row notes text-gray-400"}>
                <span className={"text-xs w-5"}>{"->"}</span>{addStr}
            </div>
        </div>
    );
}