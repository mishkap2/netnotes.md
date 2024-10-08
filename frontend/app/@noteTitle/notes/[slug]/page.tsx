import {BackButton} from "@/components/ui/back-btn";
import {getNoteBySlug} from "@/lib/notes";
import {HeaderTitle} from "@/components/ui/header-title";
import {Suspense} from "react";

const TitleLoaded = async (slug: string) => {
  const response = await getNoteBySlug(slug);
  if (response.error) {
    return null;
  }
  if (response.data)
  return(
    <HeaderTitle title={response.data.title} id={response.data.id}/>
  )
}

export default function NoteTitle({params}: {params: {slug: string}}) {

  return (
    <div className={`w-full h-full flex justify-center items-center text-md relative text-cyan-l`}>
      <BackButton />
      <Suspense fallback={<div>Loading...</div>}>
        {
          (params.slug === "new")? <HeaderTitle title="New Note" id={-1}/> : TitleLoaded(params.slug)
        }
      </Suspense>
    </div>
  );
}
