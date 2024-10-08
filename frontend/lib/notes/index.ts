import {Note} from "@/types";

interface ApiResponse<T> {
  data?: T;
  error?: string;
}

const handleResponse = async <T>(response: Response): Promise<ApiResponse<T>> => {
  if (!response.ok) {
    const errorMessage = `HTTP error ${response.status}: ${response.statusText}`;
    console.error(errorMessage);
    return { error: errorMessage };
  }
  try {
    const data: T = await response.json();
    return { data };
  } catch (error) {
    console.error("Failed to parse JSON response:", error);
    return { error: "Failed to parse JSON response" };
  }
}

const getNotes = async (): Promise<ApiResponse<Note[]>> => {
  try {
    const response = await fetch("http://localhost:8000/api/notes", { cache: 'no-cache' });
    return handleResponse<Note[]>(response);
  } catch (error) {
    console.error("Failed to fetch notes:", error);
    return { error: "Failed to fetch notes" };
  }
}

const getNoteByID = async (id: number): Promise<ApiResponse<Note>> => {
  const { data, error } = await getNotes();
  if (error) return { error };
  const note = data?.find((note: Note) => note.id === id);
  return note ? { data: note } : { error: "Note not found" };
}

const getNoteBySlug = async (slug: string): Promise<ApiResponse<Note>> => {
  const { data, error } = await getNotes();
  if (error) return { error };
  const note = data?.find((note: Note) => note.slug === slug);
  return note ? { data: note } : { error: "Note not found" };
}

const createNote = async (note: {
  title: string;
  description: string;
}): Promise<ApiResponse<Note>> => {
  try {
    const response = await fetch("http://localhost:8000/api/notes/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(note)
    });
    return handleResponse<Note>(response);
  } catch (error) {
    console.error("Failed to create note:", error);
    return { error: "Failed to create note" };
  }
}

const deleteNote = async (id: number): Promise<ApiResponse<null>> => {
  try {
    const response = await fetch(`http://localhost:8000/api/notes/${id}/`, {
      method: "DELETE"
    });
    if (!response.ok) {
      const errorMessage = `Failed to delete note: HTTP error ${response.status}`;
      console.error(errorMessage);
      return { error: errorMessage };
    }
    return { data: null };
  } catch (error) {
    console.error("Failed to delete note:", error);
    return { error: "Failed to delete note" };
  }
}

const partialUpdateNote = async (id: number, note: Partial<Note>): Promise<ApiResponse<Note>> => {
  try {
    const response = await fetch(`http://localhost:8000/api/notes/${id}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(note)
    });
    return handleResponse<Note>(response);
  } catch (error) {
    console.error("Failed to update note:", error);
    return { error: "Failed to update note" };
  }
}

export {
  getNotes,
  getNoteByID,
  getNoteBySlug,
  createNote,
  deleteNote,
  partialUpdateNote
};
