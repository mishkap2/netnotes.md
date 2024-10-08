import {Note} from "@/types";
import Link from "next/link";
import {PiTrashSimpleDuotone} from "react-icons/pi";

export const NoteCard = ({ note, popNote }: {note: Note, popNote: Function}) => {
  return (
    <div className={`card w-full min-h-48 max-h-64 flex flex-col gap-2 p-6 border border-white-d rounded-md duration-700 hover:border-white-l relative`}>
      <div className="flex justify-between items-center gap-4">
        <Link href={`/notes/${note.slug}`} className={`whitespace-nowrap overflow-hidden text-ellipsis text-md w-fit max-w-full text-blue-l hover:text-blue-n duration-200`}>{note.title}</Link>
        <PiTrashSimpleDuotone
          className={`text-red-l hover:text-red-n text-md min-w-fit top-8 right-4 duration-700 cursor-pointer`}
          onClick={() => popNote(note.id)}
        />
      </div>
      <div className={`card-description`}>{note.description}</div>

    </div>
  )
}