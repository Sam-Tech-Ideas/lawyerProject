import React from "react";
import heropic from "../assets/heropic.png";
import Appointment from "./Appointment";

const Hero = () => {
  return (

      <section class="text-gray-600 body-font  bg-gradient-to-b from-[#e0c8ab]  ">
        <div class="container  py-6 mx-auto">
          <div class="lg:w-4/5 mx-auto  flex flex-wrap">
            <div class="lg:w-1/2 w-full  lg:py-6 mb-3 lg:mb-0 px-3">
              <h2 class="text-5xl title-font text-gray-900 font-extrabold">
                Your Problem.
              </h2>

              <h1 class="text-[#cf9455] text-5xl title-font font-extrabold mb-4">
                Our Goal.
              </h1>

              <p class="leading-relaxed mb-4 px-2">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo
            
              </p>
              <Appointment/>
            </div>
         
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-full object-cover object-center "
               src={heropic}
            />
          </div>
        </div>
      </section>
  );
};

export default Hero;
