interface params {
    num: string,
    eDep: string,
    sDep: string
    late: number,
    dest: string,
    plat: string,
    pCnf: boolean,
    canc: string | null;
}

function createLateStyle(canc: string | null, late: number) {
    if (canc) {
        return " text-red-500";
    } else {
        if (late !== 0) {
            return " text-amber-500";
        }
    }
    return "";
}

function createDepString(canc: string | null, late: number, eDep: string) {
    if (canc) {
        return "Cancelled";
    } else {
        if (late !== 0) {
            return "Exp " + eDep.substring(0, 2) + ":" + eDep.substring(2, 4);
        }
    }
    return "";
}

export default function infoPanel({ num, eDep, sDep, late, canc, dest, plat, pCnf }: params) {
    const eDepString = createDepString(canc, late, eDep);
    const latenessStyling = createLateStyle(canc, late);
    const platformStyling = (pCnf ? " bg-teal-900" : " bg-gray-900");
    const cancelStyling = (canc ? " text-red-500" : "");

    // <p className={"num w-1/12"}>{num}</p>
    return (
        <div className={"info flex items-center justify-between w-full text-xl cursor-pointer mt-0.5 mb-0.5"}>
            <div className={"flex"}>
                <p className={"sDep w-16 text-center" + cancelStyling}>{sDep.substring(0, 2)}:{sDep.substring(2, 4)}</p>
                <p className={"eDep w-24 ml-2" + latenessStyling}>{eDepString}</p>
            </div>
            <p className={"dest text-center" + cancelStyling}>{dest}</p>
            <div className={"flex"}>
                <p className={"placeholder w-24 mr-2"}></p>
                <p className={"plat w-16 text-center" + platformStyling + cancelStyling}>{plat}</p>
            </div>

        </div>
    )
}
