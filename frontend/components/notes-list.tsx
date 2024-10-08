"use client"

import {getNotes, deleteNote as rmNote} from "@/lib/notes";
import {NoteCard} from "@/components/note-card";
import {Note} from "@/types";
import { useState} from "react";

export const NotesList = ({notes: note}: {notes: Note[]}) => {
  const [notes, setNotes] = useState(note);

  const deleteNote = async (id: number) => {
    console.log(`Deleting Note with id: ${id}`);
    let response = await rmNote(id);
    if (!response.error){
      setNotes(notes.filter((note) => note.id != id));
    }
  }

  if (notes.length == 0) {
    return (
      <div className={`w-full h-full items-start text-center text-base text-white-d font-medium`}>
        Oh so empty :(
      </div>
    )
  }

  return (
    <div className={`w-full grid grid-cols-4 max-sm:grid-cols-1 gap-8 duration-700`}>
      {
        notes.map((note) => (
          <NoteCard note={note} popNote={deleteNote} key={note.id}/>
        ))
      }
    </div>
  )
}

export async function  getServerSideProps() {
  const notes = await getNotes();
  return {
    props: {notes}
  }
}