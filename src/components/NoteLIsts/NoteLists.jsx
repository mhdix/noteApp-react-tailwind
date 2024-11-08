import React from 'react'

const NoteLists = () => {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <ul className='flex justify-around'>
          <li>earliest</li>
          <li>latest</li>
          <li>all</li>
        </ul>
      </div>
      {/* note items */}
      <div className="flex flex-col gap-4 w-full items-center">
        <NoteItems />
      </div>
    </div>
  );
}

export default NoteLists

function NoteItems () {
  return (
      <div className="flex flex-col gap-4 px-4 py-3 border min-h-40 w-4/5 rounded-lg">
        {/* navbarNote */}
        <div className="flex justify-between">
          <h2 className="font-bold text-lg">note title</h2>
          <button className="border p-1 px-2 rounded-lg">add fav</button>
        </div>
        <hr className="mx-10" />
        {/* content Note */}
        <div className="flex justify-between pl-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            optio autem asperiores corporis iste numquam doloremque blanditiis
            veritatis doloribus voluptatibus. Autem ratione soluta non velit
            deserunt similique animi necessitatibus quos?
          </p>
        </div>
      </div>
  );
}