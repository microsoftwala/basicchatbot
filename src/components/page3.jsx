import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Page3 = () => {
  const navigate = useNavigate();
  const userName = useSelector((state) => state.userName);
  const home = () => {
    navigate("/");
  };
  const age = useSelector((state) => state.age);
  return (
    <div className="flex flex-col justify-center  min-h-screen bg-gradient-to-r from-white to-purple-900 p-6 md:p-12">
      <h2 className="text-center text-3xl md:text-4xl font-mono mb-4 h-1/2">
        Your name {userName} has been added to student system and his age {age}.
      </h2>
      <button
        onClick={home}
        className="text-center text-2xl md:text-3xl font-bold mb-4 h-1/2 "
      >
        You may now exit.
      </button>
    </div>
  );
};

export default Page3;
