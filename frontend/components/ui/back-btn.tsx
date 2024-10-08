"use client"

import {useRouter} from "next/navigation";
import {PiArrowSquareLeftDuotone} from "react-icons/pi";

export const BackButton = () => {
  "use client"
  const router = useRouter();

  return (
    <div
      className={`absolute top-0 right-full items-center h-full flex cursor-pointer text-cyan-n hover:text-cyan-l duration-500`}
      onClick={() => router.back()}>
      <PiArrowSquareLeftDuotone className={`text-xl`}/>
      <span>Back</span>
    </div>
  )
}