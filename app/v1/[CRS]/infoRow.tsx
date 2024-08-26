interface params {
    eDep: string,
    sDep: string
    dest: string,
    plat: string,
    pCnf: boolean,
    canc: string | null;
}

function createLateStyle(canc: string | null, late: boolean) {
    if (canc) {
        return " text-red-500";
    } else {
        if (late) {
            return " text-amber-500";
        }
    }
    return "";
}

function createDepString(canc: string | null, late: boolean, eDep: string) {
    if (canc) {
        return "Cancelled";
    } else {
        if (late) {
            return "Exp " + eDep.substring(0, 2) + ":" + eDep.substring(2, 4);
        }
    }
    return "";
}

export default function infoRow({ eDep, sDep, canc, dest, plat, pCnf }: params) {
    const late = +eDep - +sDep !== 0; // This is true for both early and late.
    const eDepString = createDepString(canc, late, eDep);
    const latenessStyling = createLateStyle(canc, late);
    const platformStyling = (pCnf ? " bg-teal-900" : " bg-gray-900");
    const cancelStyling = (canc ? " text-red-500" : "");

    return (
        <div className={"info flex items-center justify-between w-full text-sm sm:text-xl cursor-pointer mt-0.5 mb-0.5"}>
            <div className={"flex"}>
                <p className={"sDep w-11 sm:w-16 text-center" + cancelStyling}>{sDep.substring(0, 2)}:{sDep.substring(2, 4)}</p>
                <p className={"eDep w-20 sm:w-28 ml-2" + latenessStyling}>{eDepString}</p>
            </div>
            <p className={"dest text-center" + cancelStyling}>{dest}</p>
            <div className={"flex"}>
                <p className={"placeholder w-0 sm:w-28 m-0 sm:mr-2"}></p>
                <p className={"plat w-11 sm:w-16 text-center" + platformStyling + cancelStyling}>{plat}</p>
            </div>
        </div>
    )
}
