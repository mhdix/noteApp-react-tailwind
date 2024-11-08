import React from "react";
import Navbar from "./navbar/Navbar";
import NoteLists from "./NoteLIsts/NoteLists";
import AddNotes from "./addNotes/AddNotes";

const Home = () => {
  return (
    <div className="grid grid-cols-7">
      {/* navbar */}
      <div className="col-span-full pb-10">
        <Navbar />
      </div>

      {/* addNote */}
      <div className="flex flex-col items-center col-span-3 justify-around">
        <h2 className="text-2xl mb-10 font-bold">Add a Note</h2>
        <AddNotes />
      </div>

      {/* noteList */}
      <div className="flex flex-col items-center col-span-4 col-start-4 relative">
        <h2 className="text-2xl mb-10 font-bold">Note list</h2>
        <NoteLists />
      </div>
    </div>
  );
};

export default Home;
