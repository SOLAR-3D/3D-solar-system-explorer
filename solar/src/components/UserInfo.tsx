"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Image from "next/image"

type User = {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
} | undefined

type Props = {
    user: User
}

export default function UserInfo({ user }: Props) {

    //console.log(user)

    const greeting = user?.email ? (
        <div className="flex flex-col items-center p-6 bg-white rounded-lg font-bold text-5xl text-black">
            Hello {user?.email}!
        </div>
    ) : null

    // const emailDisplay = user?.email ? (
    //     <div className="flex flex-col items-center p-6 bg-white rounded-lg font-bold text-5xl text-black">
    //         {user?.email}
    //     </div>
    // ) : null

    return (
        <section className="flex flex-col gap-4">
            {greeting}
            {/* {emailDisplay} */}
          
           
           
        </section>
    )
}