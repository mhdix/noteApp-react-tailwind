import React, { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const AddNotes = ({ title, setTitle, desc, setDesc, note, setNote }) => {
  // select input in first load
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && desc.trim()) {
      setNote((is) => [...is, { id: uuidv4() , title, desc , createAt: Date.now() }]);
    } else {
      alert("one item empty");
      inputRef.current.focus();
    }
    setTitle("");
    setDesc("");
    console.log(note);
    inputRef.current.focus();
  };
  const handleContent = (e) => {
    setDesc(e.target.value);
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  return (
    <form
      className="flex flex-col gap-4 w-full items-center"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col w-2/6">
        <span className="text-slate-800">title:</span>
        <input
          type="text"
          ref={inputRef}
          value={title}
          onChange={handleTitle}
          className="border border-gray-400 rounded-sm w-full"
        />
      </div>
      <div className="flex flex-col mb-3 w-2/6">
        <span className="text-slate-800">content :</span>
        <input
          type="text"
          onChange={handleContent}
          value={desc}
          className="border border-gray-400 rounded-sm"
        />
      </div>
      <input
        type="submit"
        value="send"
        onClick={handleSubmit}
        className="border border-gray-400 bg-green-50 p-1 px-4 w-2/6"
      />
    </form>
  );
};

export default AddNotes;
