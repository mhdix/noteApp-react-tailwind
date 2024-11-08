import React from 'react'

const AddNotes = () => {
  return (
    <div className="flex flex-col gap-4 w-full items-center">
      <div className="flex flex-col w-2/6">
        <span className="text-slate-800">title:</span>
        <input
          type="text"
          className="border border-gray-400 rounded-sm w-full"
        />
      </div>
      <div className="flex flex-col mb-3 w-2/6">
        <span className="text-slate-800">content :</span>
        <input type="text" className="border border-gray-400 rounded-sm" />
      </div>
      <input
        type="submit"
        className="border border-gray-400 bg-green-50 p-1 px-4 w-2/6"
      />
    </div>
  );
}

export default AddNotes