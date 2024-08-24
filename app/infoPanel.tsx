interface params {
    num: string,
    eDep: string,
    late: number,
    dest: string,
    plat: string
}

export default function infoPanel({ num, eDep, late, dest, plat }: params) {
    const lateNessStyling = (late > 0 ? "text-amber-500" : "");

    return (
        <div className={"info flex items-center justify-between w-full"}>
            {/*<p className={"num w-1/12"}>{num}</p>*/}
            <p className={"eDep w-1/12 text-center " + lateNessStyling}>{eDep.substring(0, 2)}:{eDep.substring(2, 4)}</p>
            <p className={"dest w-1/3 text-center"}>{dest}</p>
            <p className={"plat w-1/12 text-center"}>{plat}</p>
        </div>
    )
}
