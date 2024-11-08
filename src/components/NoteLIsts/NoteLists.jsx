import React, { useEffect, useState } from "react";

const NoteLists = ({ note }) => {
  const [filterNotes, setFilterNotes] = useState(note);
  const [filterType, setFilterType] = useState("all");
  
  useEffect(() => {
    applyFilter(filterType);
  }, [note]);

  const applyFilter = (filter) => {
    let sortedNotes;
    switch (filter) {
      case "latest": {
        sortedNotes = [...note].sort((a,b) => b.createAt - a.createAt)
        setFilterNotes(sortedNotes)
        return;
      }
      case "earliest": {
        sortedNotes = [...note].sort((a,b) => a.createAt - b.createAt)
        setFilterNotes(sortedNotes)
        return;
      }
      case "all": {
        setFilterNotes(note);
        return;
      }
      default:
        setFilterNotes(note)
    }
  };

  const handleFilter = (e) => {
    const selectFilter = e.target.getAttribute('data-filter')
    applyFilter(selectFilter)
    setFilterType(selectFilter)
  }
  
  return (
    <div className="flex flex-col gap-10 min-w-[640px]">
      <div>
        <ul className="flex justify-around">
          <li onClick={handleFilter} data-filter="earliest">
            earliest
          </li>
          <li onClick={handleFilter} data-filter="latest">latest</li>
          <li onClick={handleFilter} data-filter="all">all</li>
        </ul>
      </div>
      {/* note items */}
      <div className="flex flex-col gap-4 w-full items-center">
        <NoteItems filterNotes={filterNotes} />
      </div>
    </div>
  );
};

export default NoteLists;

export function NoteItems({ filterNotes }) {
  return (
    <div className="flex flex-col items-center gap-4">
      {filterNotes.map((note) => (
        <div
          key={note.id}
          className="flex flex-col gap-4 px-4 py-3 border min-h-40 min-w-[640px] rounded-lg"
        >
          {/* navbarNote */}
          <div className="flex justify-between">
            <h2 className="font-bold text-lg">{note.title}</h2>
            <button className="border p-1 px-2 rounded-lg">add fav</button>
          </div>
          <hr className="mx-10" />
          {/* content Note */}
          <div className="flex justify-between pl-4">
            <p>{note.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
