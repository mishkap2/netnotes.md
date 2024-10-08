import {Suspense} from "react";
import {NotesList} from "@/components/notes-list";
import {getNotes} from "@/lib/notes";

const suspendedNotesList = async () => {
  const notes = await getNotes();
  if(notes.error) {
    return <div className={`text-base text-white-d`}>Failed to fetch notes: {notes.error}</div>;
  }
  if(notes.data)
    return <NotesList notes={notes.data} />;
}

export default function Home() {
  return (
    <Suspense fallback={<div className={`text-base text-white-d`}>Loading...</div>}>
      { suspendedNotesList()}
    </Suspense>
  );
}
