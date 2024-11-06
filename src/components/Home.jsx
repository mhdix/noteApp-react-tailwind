import React from "react";
import Navbar from "./navbar/Navbar";
import NoteLists from "./NoteLIsts/NoteLists";

const Home = () => {
  return (
    <div className="grid grid-cols-7">
      {/* navbar */}
      <div className="col-span-full">
        <Navbar />
      </div>

      {/* addNote */}
      <div className="flex col-span-3 justify-around">
        <div>addNotes</div>
        <div>filterNotes</div>
      </div>

      {/* noteList */}
      <div className="col-span-3 col-start-5 relative">
        <NoteLists />
      </div>
    </div>
  );
};

export default Home;
