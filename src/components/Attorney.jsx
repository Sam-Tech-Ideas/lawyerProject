import React from 'react'
import jane from '../assets/jane.png'
import john from '../assets/hey.png'
import john2 from '../assets/man.png'

const Attorney = () => {
    const Attorneys = [
      {
        name: "Jane William",
        image: jane,
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati excepturi quis dicta asperiores aut ipsa expedita porro. Natus similique nostrum qui, suscipit ducimus, rem possimus officia, ex molestias nesciunt repellat! ",
        position: "BANK & FINANCIAL LAWYER",
        id: 1,
      },
      {
        name: "Andrea Collins",
        image:john,
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati excepturi quis dicta asperiores aut ipsa expedita porro. Natus similique nostrum qui, suscipit ducimus, rem possimus officia, ex molestias nesciunt repellat!",
        position: "FAMILY LAWYER",
        id: 2,
      },
      {
        name: "John Smith",
        image: john2,
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati excepturi quis dicta asperiores aut ipsa expedita porro. Natus similique nostrum qui, suscipit ducimus, rem possimus officia, ex molestias nesciunt repellat!",
        position: "BUSINESS LAWYER",
        id: 3,
      },
    ];
  return (
    <div>
      <section class="text-black body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col">
            <div className="text-center py-8  ">
              <h1 className="text-5xl font-extrabold text-center py-4">
                OUR ATTORNEYS
              </h1>
              <p className="flex items-center  justify-center">
                Lorem ipsum dolor sit amet cons Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Quam, dolore. <br /> 
             beatae ut nihil non voluptate eum minima quod cum quam quia
                autem fugiat porro temporibus, harum tenetur!
              </p>
            </div>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {
                Attorneys.map(({ name, image, description, position, id }) => (

            
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src={image}
                />
              </div>
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                {name}
              </h2>
                <h3 class="text-base font-medium title-font text-gray-400 mt-1">
                {position}
                </h3>
              <p class="text-base leading-relaxed mt-2">
                Swag shoivdigoitch literally meditation subway tile tumblr
                cold-pressed. Gastropub street art beard dreamcatcher neutra,
                ethical XOXO lumbersexual.
              </p>
             
            </div>
            ))}
           
          </div>
        </div>
      </section>
    </div>
  );
}

export default Attorney