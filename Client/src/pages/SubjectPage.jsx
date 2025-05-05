import React from 'react'
import landingPhoto from "../assets/landingphoto.png";
import Card from '../components/Card';

function SubjectPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 ">
      <div
        className="mt-20 py-8 mx-auto subject bg-cover bg-center bg-no-repeat rounded"
        style={{ backgroundImage: `url(${landingPhoto})` }}
      >
        <div className="text-white flex items-center justify-start text-left px-10">
          <div className="w-1/2 py-8 flex-1 md:flex-2 ">
            <h1 className="text-2xl md:text-3xl font-bold pb-2">
              Our Subjects
            </h1>
            <p className="font-light text-xl md:text-xl">
              Achieve Academic Success
              <br /> Resources for High School & University Students
              <br />
              Learn Smarter. Study Better. Succeed Faster
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col mt-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Subjects We Offer
        </h1>
        <p className="text-gray-600 font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit
          amet justo vitae velit tincidunt tempor. Curabitur volutpat mauris ut
          ante placerat, vel malesuada purus volutpat. Integer ut metus vel
          felis mollis malesuada. Vivamus luctus velit ac malesuada eleifend.
          Duis faucibus justo at ligula efficitur, ac ullamcorper libero
          lacinia. Ut tincidunt, nunc ac tincidunt gravida, nunc purus feugiat
          orci, et vehicula elit nulla sit amet justo.
        </p>
      </div>
      <Card />
    </div>
  );
}

export default SubjectPage