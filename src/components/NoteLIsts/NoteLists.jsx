import React from 'react'

const NoteLists = ({ note }) => {
  return (
      <div className="flex flex-col gap-10 min-w-[640px]">
        <div>
          <ul className="flex justify-around">
            <li>earliest</li>
            <li>latest</li>
            <li>all</li>
          </ul>
        </div>
        {/* note items */}
        <div className="flex flex-col gap-4 w-full items-center">
          <NoteItems note={note} />
        </div>
      </div>

  );
};

export default NoteLists;

export function NoteItems({ note }) {
  return (
    <div className="flex flex-col items-center gap-4">
      {note.map((note) => (
        <div key={note.id} className="flex flex-col gap-4 px-4 py-3 border min-h-40 min-w-[640px] rounded-lg">
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