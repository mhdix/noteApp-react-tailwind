import React from 'react'

const Navbar = () => {
  return (
    <div className="lg:grid lg:grid-cols-3 border-b-2 py-5 ">
      <div className="lg:flex lg:justify-center lg:items-center lg:col-span-1">
        <span className="font-bold text-2xl text-blue-700">{1}</span> - notes
      </div>
      <div className="lg:col-span-1 lg:flex lg:justify-center lg:items-center">
        <h1 className="font-bold text-2xl">Perfect Code</h1>
      </div>
      <div className="lg:flex gap-2 lg:col-span-1 lg:justify-center lg:items-center">
        <div className="">
          <input
            type="text"
            className="border-2 p-2 rounded-lg"
            placeholder="Search notes ..."
          />
        </div>
        <button className=" lg:flex lg:justify-center bg-white lg:items-center border-2 rounded-lg p-2 px-4 text-center ">
          search
        </button>
      </div>
    </div>
  );
}

export default Navbar