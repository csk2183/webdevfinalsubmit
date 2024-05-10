import React, { useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests

function AddNoteForm({ onAddNote }) {
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewNote({
      ...newNote,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (newNote.title.trim() !== "" && newNote.content.trim() !== "") {
      try {
        // Send a POST request to the backend to add the new note
        const response = await axios.post("/notes", newNote);
        const savedNote = response.data;
        onAddNote(savedNote); // Update the UI with the saved note
        setNewNote({
          title: "",
          content: "",
        });
      } catch (error) {
        console.error("Error adding note:", error);
      }
    }
  };

  return (
    <div className="add-note-form">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="title"
          value={newNote.title}
          placeholder="Title"
          onChange={handleInputChange}
        />
        <textarea
          name="content"
          value={newNote.content}
          placeholder="Content"
          onChange={handleInputChange}
        ></textarea>
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
}

export default AddNoteForm;
