import React from "react";
import { useNavigate } from "react-router-dom";

const Page1 = () => {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate("/chatbot");
  };

  return (
    <div className="flex flex-col justify-center  min-h-screen bg-gradient-to-r from-white to-purple-900 p-6 md:p-12">
      <h1 className="text-center text-3xl md:text-5xl font-bold mb-4 h-1/2 ">
        Enter into Student Info System
      </h1>
      <div className="text-center h-1/2 text-black">
        <button
          onClick={handleEnrollClick}
          className="px-6 md:px-8 py-3 md:py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-lg transition-colors duration-300 text-2xl font-bold  shadow-slate-800/50"
        >
          Enroll Now!
        </button>
      </div>
    </div>
  );
};

export default Page1;
