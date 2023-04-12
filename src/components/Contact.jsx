import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#383956]">
      <div>
        <div className="py-5 text-center text-white">
          <h1
            className="text-white text-center font-bold text-2xl
                "
          >
            Contact us
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="flex  items-center  py-6 flex-col">
          <div className="rounded my-2 ">
            <input
              type="text"
              placeholder="Full Name"
              className="py-2 pr-24 rounded"
            />
          </div>
          <div className="rounded my-2 ">
            <input
              type="text"
              placeholder="Email address"
              className="py-2 pr-24 rounded"
            />
          </div>

          <div>
            <textarea
              name=""
              id=""
              cols="33"
              rows="6"
              placeholder="Message"
              className="my-4 p-1 rounded w-full"
            ></textarea>
          </div>
        </div>
      </div>

      {/* <div className="">
        <div class="  py-6 mx-auto   ">
          <div class="lg p-8 flex flex-col md:mr-auto w-full mt-10 ">
            <div className="flex justify-center items-center flex-col container">
              <div className=" mb-3 ">
                <h2 class="text-white  text-lg mb-2 font-medium  title-font text-center">
                    Get an Appointment
                </h2>
                <div class="w-16 h-1 rounded-full bg-white inline-flex"></div>
              </div>

              <div class="mb-4">
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
              <div class="mb-4">
                <textarea
                  id="message"
                  name="message"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button className="bg-[#d09a58] w-full px-8 py-1">Send Message</button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Contact;
