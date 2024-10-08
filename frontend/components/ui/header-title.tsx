"use client"

import {PiArrowArcLeft, PiFloppyDiskDuotone} from "react-icons/pi";
import {useState} from "react";
import {partialUpdateNote} from "@/lib/notes";

export const HeaderTitle = ({title: propTitle, id, className} : {title: string, id: number, className?: string}) => {
  const [title, setTitle] = useState(propTitle);
  const [boxValue, setBoxValue] = useState(propTitle);

  const saveTitle = async () => {
    const updatedTitle = boxValue.trim();
    if (updatedTitle !== title) {
      try {
        const response = await partialUpdateNote(id, { title: updatedTitle });
        if (response.data) {
          setTitle(updatedTitle);
        } else if (response.error) {
          console.error('Failed to update title:', response.error);
          // Optionally show an error to the user
        }
      } catch (error) {
        console.error('Error updating title:', error);
        // Optionally handle errors such as showing a notification to the user
      }
    }
  };
console.log(boxValue, title)

  return (
    <div className={`w-full flex gap-4 text-blue-l px-8 ${className} relative`}>
      <div
        className={`flex gap-4 absolute top-0 sm:left-full max-sm:right-0 items-center h-full ${(boxValue.trim() === title)?"invisible":""} [&>*]:cursor-pointer`}
      >
        <PiFloppyDiskDuotone
          className={`text-xl`}
          title={`save title.`}
          onClick={async () => {
            setTitle(boxValue)
            await saveTitle()
          }}
        />
        <PiArrowArcLeft
          className={`text-xl`}
          title={`restore title.`}
          onClick={() => setBoxValue(title)}
        />
      </div>
      <input type="text" value={boxValue} placeholder={`note title.`}
             className={`w-full bg-transparent focus:outline-0 focus:text-cyan-l placeholder:text-white-d text-md`}
             onChange={(e) => {
                setBoxValue(e.target.value)
             }
            }
      />
    </div>
  )
}