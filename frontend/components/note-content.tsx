"use client"

import {useState} from "react";
import {PiFloppyDiskDuotone, PiArrowArcLeft, PiTrashSimpleDuotone, PiTrashDuotone} from "react-icons/pi";
import {HeaderTitle} from "@/components/ui/header-title";
import {deleteNote, partialUpdateNote} from "@/lib/notes";
import {redirect, useRouter} from "next/navigation";
import {router} from "next/client";

export const NoteContent = ({title, content: propContent, id}: {title: string, content: string, id: number}) => {
  const [content, setContent] = useState(propContent);
  const [boxContent, setBoxContent] = useState(content);
  const [spellCheck, setSpellCheck] = useState(false);
  const router = useRouter()

  const handleSaveContent = async () => {
    if (boxContent.trim() !== content) {
      try {
        const response = await partialUpdateNote(id, { description: boxContent.trim() });
        if (response.data) {
          setContent(boxContent.trim());
          console.log("Content updated successfully.");
        } else if (response.error) {
          console.error('Failed to update content:', response.error);
        }
      } catch (error) {
        console.error('Error updating content:', error);
      }
    }
  };

  const handleDeleteNote = async () => {
    try {
      const response = await deleteNote(id);
      if (response.error) {
        console.error('Failed to delete note:', response.error);
      } else {
        console.log("Note deleted successfully.");
        router.back();
      }
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  console.log(`${boxContent} === ${content} = ${boxContent.trim() === content}`)

  return (
    <div className={`w-full flex flex-col h-full flex-grow gap-4`}>
      <textarea
        className={`w-full h-full p-0 flex-grow bg-black-d text-md focus:outline-none border-none resize-none 
        placeholder:text-white-d font-light max-sm:text-base`}
        value={boxContent}
        spellCheck={spellCheck}
        placeholder={`content of note.`}
        onChange={(e) => setBoxContent(e.target.value)}
        onFocus={() => setSpellCheck(true)}
        onBlur={() => setSpellCheck(false)}
      />
      <div className={`controls flex gap-4`}>
        <div
          className={`btn ${(boxContent.trim() === content) ? "disabled" : ""}`}
          onClick={() => setBoxContent(content)}
        >
          <PiArrowArcLeft className={`text-xl`}/>
          <span className={`text-base`}>Discard Changes</span>
        </div>
        <div
          className={`btn ${(boxContent.trim() === content) ? "disabled" : ""}`}
          onClick={async () => {
            setContent(boxContent)
            await handleSaveContent();
          }}
        >
          <PiFloppyDiskDuotone className={`text-xl`}/>
          <span className={`text-base`}>Save Changes</span>
        </div>
        <div
          className="btn text-red-n border-red-d hover:bg-red-d/20"
          onClick={ async () => {
            await handleDeleteNote()
          }}
        >
          <PiTrashDuotone className={`text-xl`}/>
          <span className={`text-base`}>Delete Note</span>
        </div>
      </div>
    </div>
  )
}