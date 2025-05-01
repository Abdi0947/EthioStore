import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Typewriter from 'typewriter-effect';
import student from "../assets/student pp.png";

import {
  FaChalkboardTeacher,
  FaUsers,
  FaCalendarAlt,
  FaLaptopCode,
  FaClipboardList,
  FaPlus,
  FaMinus,
  FaMoneyBillWave,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function OtherPage() {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigator = useNavigate();

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <section className="flex flex-col-reverse md:flex-row items-center py-16 mt-12 gap-8">
      <div className="w-full md:w-1/2 flex justify-center">
  <img
    src={student}
    alt="Smart School Management"
    className="w-2/3 md:w-3/4 max-w-xs"
  />
</div>

      <div className="w-full md:w-1/2">
  <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
    Are you ready to the next level?
    <br />
    <span className="block mt-2 text-green-700">
      <Typewriter
        options={{
          strings: ["Stay focused .", "trust your preparation.", "Stay Consistent."],
          autoStart: true,
          loop: true,
        }}
      />
    </span>
  </h1>
  <p className="text-lg md:text-xl text-gray-600 mb-6">
    It seems impossible until it's done. <br />
  </p>
  <div className="flex flex-col sm:flex-row gap-4">
    <button
      onClick={() => navigator("/About")}
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg"
    >
      Learn More
    </button>
  </div>
</div>
        
      </section>

      <section className="py-16 mt-10">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Features
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaChalkboardTeacher className="text-4xl text-blue-500" />,
              title: "Teacher Management",
              description:
                "Manage teacher profiles, assignments, and schedules efficiently.",
            },
            {
              icon: <FaUsers className="text-4xl text-green-500" />,
              title: "Student Management",
              description:
                "Organize student data, attendance, grades, and reports in one place.",
            },
            {
              icon: <FaCalendarAlt className="text-4xl text-yellow-500" />,
              title: "Class Scheduling",
              description:
                "Easily schedule classes, exams, and events with proper coordination.",
            },
            {
              icon: <FaLaptopCode className="text-4xl text-blue-600" />,
              title: "Online Learning Integration",
              description:
                "Support for remote learning and access to digital resources.",
            },
            {
              icon: <FaClipboardList className="text-4xl text-purple-500" />,
              title: "Task & Assignment Tracking",
              description:
                "Track assignments, deadlines, and student progress effortlessly.",
            },
            {
              icon: <FaMoneyBillWave className="text-4xl text-blue-600" />,
              title: "Fee Management System",
              description:
                "Track monthly and yearly fees with analytics and charts.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition"
            >
              <div className="bg-gray-100 p-4 rounded-full mb-4 flex justify-center items-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-green-300 rounded-xl mt-10">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Our Testimonials
          </h2>
          <p className="text-center text-gray-700 mb-10">
            Trusted by school administrators, teachers, and staff around the
            globe.
          </p>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            modules={[Autoplay]}
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <SwiperSlide key={i}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-600 italic mb-4">
                    “This system is intuitive, reliable, and transformed how
                    we manage education.”
                  </p>
                  <div className="flex items-center">
                    {/* Image placeholder removed */}
                    <div className="w-12 h-12 rounded-full bg-gray-300" />
                    <div className="ml-4">
                      <p className="font-semibold">User {i}</p>
                      <p className="text-sm text-gray-500">Role {i}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 mt-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {[
            {
              q: "What is a Smart School Management System?",
              a: "It's software that streamlines admin, academics, and communication in schools.",
            },
            {
              q: "How does it improve communication in schools?",
              a: "Through announcements, notifications, messaging, and progress reports.",
            },
            {
              q: "What features are included?",
              a: "Attendance, grades, schedules, profiles, communication tools, and reports.",
            },
            {
              q: "Is it customizable for different schools?",
              a: "Yes, it suits primary, secondary, and higher education institutions.",
            },
            {
              q: "How secure is the system?",
              a: "Data is encrypted, backed up, and protected with access control.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md mb-4"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-lg font-semibold">{item.q}</h3>
                <span className="text-xl text-gray-600">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </div>
              {activeIndex === index && (
                <p className="text-gray-600 mt-2">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default OtherPage;
