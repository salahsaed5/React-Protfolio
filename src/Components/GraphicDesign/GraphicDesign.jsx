import React, { useState } from "react";
import { Button } from "flowbite-react";
import img1 from "./../../assets/img-1-C4nS0eD8.jpg";
import img2 from "./../../assets/img-2-D-4H1m4L.jpg";
import img3 from "./../../assets/img-3-pR2ZEVY9.jpg";
import img4 from "./../../assets/img-4-tHccITd-.jpg";
import img5 from "./../../assets/img-5-lAucr__a.jpg";
import img6 from "./../../assets/img-6-DFW03AZ3.jpg";

const projectsData = [
  { image: img1, title: "work 02", subTitle: "animation" },
  { image: img2, title: "work 03", subTitle: "3D Model" },
  { image: img3, title: "work 04", subTitle: "motion graphics" },
  { image: img4, title: "work 05", subTitle: "UX/UI Design" },
  { image: img5, title: "work 06", subTitle: "branding" },
  { image: img6, title: "work 07", subTitle: "illustration" },
];

export default function GraphicDesign() {
  const [showAll, setShowAll] = useState(false);
  const itemsToShow = showAll ? projectsData : projectsData.slice(0, 4);

  const toggleShowAll = () => setShowAll(!showAll);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {itemsToShow.map((project, index) => (
        <div key={index} className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 w-full bg-[#2C98F0] opacity-0 hover:opacity-100 duration-500 text-white p-4 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-thin font-serif">
                <u>{project.title}</u>
              </h3>
              <p className="text-xs font-thin">{project.subTitle}</p>
            </div>
            <div className="flex gap-2 mt-2">
              <div className="bg-slate-500 py-1 px-2 rounded-md">
                <i className="fa-solid fa-share-nodes"></i>
              </div>
              <div className="bg-slate-500 py-1 px-2 rounded-md">
                <i className="fa-regular fa-eye"></i><u>100</u>
              </div>
              <div className="bg-slate-500 py-1 px-2 rounded-md">
                <i className="fa-regular fa-heart"></i><u>49</u>
              </div>
            </div>
          </div>
        </div>
      ))}
      {projectsData.length > 4 && (
        <Button onClick={toggleShowAll} size="md">
          {showAll ? "Show less" : "Show More"}
        </Button>
      )}
    </section>
  );
}
