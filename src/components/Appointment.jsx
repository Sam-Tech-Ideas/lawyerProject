import React from 'react'

const Appointment = () => {
  return (
    <div>
      <div class="container px-5 py-6 mx-auto  flex ">
        <div class=" bg-[#d09a58]  rounded-lg p-8 flex flex-col md:mr-auto w-full mt-10 md:mt-0 relative z-2 shadow-md">
          <div className="flex flex-col items-center mb-3">
            <h2 class="text-white  text-lg mb-2 font-medium  title-font text-center">
              Get an Appointment
            </h2>
            <div class="w-16 h-1 rounded-full bg-white inline-flex "></div>
          </div>

        
          <div class="relative mb-4">
            <input
              type="text"
              id="name"
              name="full-name"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Full Name"
            />
          </div>
          <div class="relative mb-4">
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Email"
            />
          </div>
          <div class="relative mb-4">
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Phone Number"
            />
          </div>
          <div class="relative mb-4">
            <textarea
              id="message"
              name="message"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              placeholder="Your message"
            ></textarea>
          </div>
          <button class="text-white bg-[#383956] uppercase border-0 py-2 px-6 focus:outline-none hover:bg-indigo-900 rounded text-lg">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Appointment