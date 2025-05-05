import React from 'react'
import {Link} from 'react-router-dom'
import mathsPhoto from '../assets/maths.jpeg'
import bioPhoto from '../assets/Biology.jpg'
import chemPhoto from '../assets/chemistry.jpg'

function Card() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {[
        {
          img: mathsPhoto,
          title: "Maths",
          description:
            "Mathematics is a field of study that discovers and organizes methods, theories and theorems that are developed and proved for the needs of empirical sciences",
        },
        {
          img: bioPhoto,
          title: "Biology",
          description:
            "Biology is the scientific study of life and living organisms. It encompasses a wide range of fields, including botany, ecology, evolution, genetics, and zoology.",
        },
        {
          img: chemPhoto,
          title: "Chemistry",
          description:
            "Chemistry is a branch of natural science that deals principally with the properties of substances.",
        },
      ].map((feature, index) => (
        <div
          key={index}
          className="bg-gray-100 p-8 rounded-lg shadow-md text-left hover:shadow-xl transition border-black"
        >
          <div className="rounded-full mb-4 flex justify-center items-center">
            <img src={feature.img} />
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-800">
            {feature.title}
          </h3>
          <p className="text-gray-600 pb-4">{feature.description}</p>
          <Link className="text-green-500 underline hover:cursor-pointer hover:text-green-950">
            {" "}
            Learn More{" "}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Card