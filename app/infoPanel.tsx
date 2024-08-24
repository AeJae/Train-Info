interface params {
    num: string,
    eDep: string,
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

export default function infoPanel({ num, eDep, late, canc, dest, plat, pCnf }: params) {
    const latenessStyling = createLateStyle(canc, late);
    const platformStyling = (pCnf ? " bg-teal-900" : " bg-gray-900");
    const cancelStyling = (canc ? " text-red-500" : "");

    // <p className={"num w-1/12"}>{num}</p>
    return (
        <div className={"info flex items-center justify-between w-full text-xl cursor-pointer mt-0.5 mb-0.5"}>
            <p className={"eDep w-1/12 text-center" + latenessStyling}>{eDep.substring(0, 2)}:{eDep.substring(2, 4)}</p>
            <p className={"dest w-1/3 text-center" + cancelStyling}>{dest}</p>
            <p className={"plat w-1/12 text-center" + platformStyling + cancelStyling}>{plat}</p>
        </div>
    )
}
