import React from "react";
import corrupt from "../assets/pie.png";
import employ from "../assets/iconp.png";
import real from "../assets/estate.png";
import tax from "../assets/money.png";
import corp from "../assets/dollar.png";
import bank from "../assets/justice.png";

const Do = () => {
  const works = [
    {
      id: 1,
      title: "Corruption",
      description:
        "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.",
      image: corrupt,
    },
    {
      id: 2,
      title: "Employment",
      description:
        "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.",
      image: employ,
    },
    {
      id: 3,
      title: "Real Estate",
      description:
        "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.",
      image: real,
    },
    {
      id: 4,
      title: "Taxes",
      description:
        "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.",
      image: tax,
    },
    {
      id: 5,
      title: "Corporation ",
      description:
        "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.",
      image: bank,
    },
    {
      id: 6,
      title: "Banking",
      description:
        "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.",
      image: corp,
    },
  ];
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5  mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              What We Do
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine, ramps microdonts
            </p>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            {works.map((work) => (
              <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full   mb-5 flex-shrink-0">
                  <img src={work.image} alt="" />
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                    {work.title}
                  </h2>
                  <p class="leading-relaxed text-base">{work.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Do;
