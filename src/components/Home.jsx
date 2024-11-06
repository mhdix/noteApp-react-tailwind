import React from "react";
import Navbar from "./navbar/Navbar";
import NoteLists from "./NoteLIsts/NoteLists";

const Home = () => {
  return (
<<<<<<< HEAD
    <div>
      <div>navbar</div>
      <div>noteList</div>
      <div>
        addNotes
=======
    <div className="grid grid-cols-7">
      {/* navbar */}
      <div className="col-span-full">
        <Navbar />
      </div>

      {/* addNote */}
      <div className="flex col-span-3 justify-around">
        <div>addNotes</div>
>>>>>>> 7aea97d41cda85f542b332378c80874d5f4118ed
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
