// Main.jsx

import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import AddNoteForm from "./AddNoteForm";
import axios from "axios"; // Import axios for making HTTP requests

function Main() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Fetch initial notes from the backend when the component mounts
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      // Send a GET request to fetch notes from the backend
      const response = await axios.get("/notes");
      setNotes(response.data); // Update state with fetched notes
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const handleAddNote = (newNote) => {
    setNotes([
      ...notes,
      {
        _id: newNote._id, // Use the MongoDB generated ID
        title: newNote.title,
        content: newNote.content,
      },
    ]);
  };

  const handleDeleteNote = async (id) => {
    try {
      // Send a DELETE request to the backend to delete the note
      await axios.delete(`/notes/${id}`);
      // Update state to remove the deleted note
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="notes-container">
        {notes.map((note) => (
          <Note
            key={note._id} // Use the MongoDB generated ID as the key
            id={note._id}
            title={note.title}
            content={note.content}
            onDelete={handleDeleteNote}
          />
        ))}
      </div>
      <AddNoteForm onAddNote={handleAddNote} />
      <Footer />
    </div>
  );
}

export default Main;
