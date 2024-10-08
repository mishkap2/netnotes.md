import React from "react";
import Image from "next/image";
import Link from "next/link";
import {NewNote} from "@/components/ui/new-note";

export const Header = ({children}: Readonly<{ children: React.ReactNode}>) => {
  return (
    <header className={`w-full px-24 max-sm:px-10 grid grid-cols-3 items-center py-12 border-b border-white-d/20`}>
      <Link href={`/`} className="flex items-center gap-4 w-fit justify-start">
        <div className="container relative w-16 aspect-square">
          <Image src={`/logo.png`} alt={`logo`} fill />
        </div>
        <span className={`text-lg`}>netnotes.</span>
      </Link>
      <div className={`w-full h-full justify-center items-center max-sm:invisible`}>
        {children}
      </div>
      <div className="controls flex justify-end w-full">
        <NewNote />
      </div>
    </header>
  )
}