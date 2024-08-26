'use client'
import {TriangleLoader} from "@/app/misc/genericLoading";
import {useRouter} from 'next/navigation';
import Image from "next/image";
import Link from "next/link";

export function HomeTitle({ name }: { name: string }) {
    const router = useRouter();

    function refresh() {
        router.refresh();
    }

    return (
        <nav className="flex h-16 w-full bg-teal-600 justify-between items-center text-center md:text-4xl sm:text-xl">
            <Link className={"mb-0.5 text-2xl w-8 text-center"} href={"/"}>{"<-"}</Link>
            <p id="titleText">Live Departures from {name}</p>
            <button className={"text-2xl w-8 flex justify-center items-center"} onClick={refresh}>
                <Image className={"invert"} src={"/refresh.svg"} alt={"refresh"} width={16} height={16} />
            </button>
        </nav>
    )
}

export function LoadingTitleV1() {
    return (
        <>
            <nav className="flex h-16 w-full bg-teal-600 justify-center items-center md:text-4xl sm:text-xl overflow-hidden text-nowrap">
                <p id="titleText">Preparing Departure Board</p>
            </nav>
            <TriangleLoader />
        </>
    )
}

export function LoadingTitleV2() {
    return (
        <>
            <nav className="flex h-16 w-full bg-teal-600 justify-center items-center md:text-4xl sm:text-xl overflow-hidden text-nowrap">
                <p id="titleText">Fetching Station Info</p>
            </nav>
            <TriangleLoader />
        </>
    )
}