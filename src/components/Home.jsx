import React, { useState } from "react";
import Navbar from "./navbar/Navbar";
import NoteLists, { NoteItems } from "./NoteLIsts/NoteLists";
import AddNotes from "./addNotes/AddNotes";

const Home = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [note, setNote] = useState([]);

  return (
    <div className="grid grid-cols-7">
      {/* navbar */}
      <div className="col-span-full pb-10">
        <Navbar note={note} />
      </div>

      {/* addNote */}
      <div className="flex flex-col items-center col-span-3 justify-around">
        <h2 className="text-2xl mb-10 font-bold">Add a Note</h2>
        <AddNotes
          title={title}
          setTitle={setTitle}
          desc={desc}
          setDesc={setDesc}
          note={note}
          setNote={setNote}
        />
      </div>

      {/* noteList */}
      <div className="flex flex-col items-center col-span-4 col-start-4 relative">
        <h2 className="text-2xl mb-10 font-bold">Note list</h2>
        {note.length ? <NoteLists note={note} setNote={setNote} /> : <p>no notes</p>}
      </div>
    </div>
  );
};

export default Home;
