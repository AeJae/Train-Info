interface params {
    num: string,
    dest: string,
    plat: string
}

export default function infoPanel({ num, dest, plat }: params) {
    return (
        <div className={"info flex items-center justify-between w-full"}>
            <p className={"num w-1/4"}>{num}</p>
            <p className={"dest w-1/4 text-center"}>{dest}</p>
            <p className={"plat w-1/12 text-center"}>{plat}</p>
        </div>
    )
}
