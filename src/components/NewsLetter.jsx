import React from 'react'

const NewsLetter = () => {
  return (
    <div className="bg-[#d09a58] text-center  w-full py-6 flex  justify-center items-center ">
      <div className="">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl font-extrabold text-white">
            Subscribe to our newsletter
          </h1>
        </div>
        <p className="text-center text-white text-sm">
          Be the first to get the latest news about us.
        </p>
        <div className="flex justify-center py-3 ">
          <input
            type="text"
            placeholder="Your email address"
            className="p-2 rounded ml-4"
          />
          <button className="px-10 text-white bg-indigo-900 rounded mx-3">
            Join
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter