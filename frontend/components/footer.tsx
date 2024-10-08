import Image from "next/image";
import {PiCopyrightDuotone} from "react-icons/pi";

export const Footer = () => {
  return (
    <footer className="max-w-[100rem] py-9 flex max-sm:flex-col max-sm:text-xs justify-between items-center text-white-d text-sm w-full">
      <p className={`flex gap-1 items-center`}>
        <span>Copyright</span> <PiCopyrightDuotone className={`text-lg`} /> <span>2024, Saurabh Kumar Sharma️</span>
      </p>
      <p className="flex items-center gap-2">
        character permutations assembled in <Image title="india" src={'/india.png'} alt="Indian Flag" width={25} height={25} />
      </p>
    </footer>
  )
}