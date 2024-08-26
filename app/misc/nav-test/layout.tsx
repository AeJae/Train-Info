import React from "react";
import Link from "next/link";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Nav Testing - Home",
    description: "Layout and navigation testing."
};

export default function TabsLayout({children} : {children: React.ReactNode}) {
    return (
        <main>
            <nav className={"flex items-center justify-around bg-teal-600 h-14 text-2xl font-bold"}>
                <Link href={"/misc/nav-test"}>Home</Link>
                <Link href={"/misc/nav-test/test1"}>Test 1</Link>
                <Link href={"/misc/nav-test/test2"}>Test 2</Link>
            </nav>
            {children}
        </main>
    )
}
