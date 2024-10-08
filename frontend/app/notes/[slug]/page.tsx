import {Suspense} from "react";
import {getNoteBySlug} from "@/lib/notes";
import {NoteContent} from "@/components/note-content";

const FetchedNoteContent = async (slug: string) => {
  const note = await getNoteBySlug(slug);
  if (note.error) {
    return (
      <div className={`flex flex-col justify-center`}>
        <span>Failed to fetch note: {note.error}</span>
      </div>
    )
  }
  if (note.data)
    return (
      <NoteContent title={note.data.title} content={note.data.description} id={note.data.id} />
    )
}

export default function Note({params}: {params: {slug: string}}) {
  return (
      <Suspense fallback={<div>Loading...</div>}>
        {
          FetchedNoteContent(params.slug)
        }
      </Suspense>
  )
}