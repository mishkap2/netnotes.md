"use client"

import {useRouter} from "next/navigation";
import {createNote} from "@/lib/notes";
import {PiPlusSquareDuotone} from "react-icons/pi";
import React from "react";

export const NewNote = () => {
  const router = useRouter();
  return (
    <div  className={`flex items-center gap-4 w-fit cursor-pointer`}
          onClick={async () => {
            let response = await createNote({
              title: "New Note",
              description: "This is a new note."
            });
            if (response.data)
              router.push(`/notes/${response.data.slug}`);
          }}
    >
      <PiPlusSquareDuotone className={`text-xl`} />
      <span className={`text-base max-sm:hidden`}>New Note</span>
    </div>
  )
}