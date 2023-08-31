import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/chatbot.css";
import { useDispatch } from "react-redux";
import { setUserName } from "../action.js";

const Chatbot = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [messages, setMessages] = useState([]); //messages.array
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      navigate("/page3");
    }
  }, [countdown, navigate]);
  setTimeout(() => {
    if (messages.length === 0) {
      setMessages([...messages, "Hello, Welcome to student info system!"]);
    }
  }, 1000);

  setTimeout(() => {
    if (messages.length === 2) {
      setMessages([...messages, "Enter Your name"]);
    }
  }, 1500);
  setTimeout(() => {
    if (messages.length === 4) {
      setMessages([...messages, "Enter Your age"]);
    }
  }, 1500);

  const handleGotItClick = () => {
    if (messages.length === 1) {
      setMessages([...messages, "Got it!"]);
    } else if (messages.length === 3) {
      if (name.length !== 0) setMessages([...messages, name]);
    } else if (messages.length === 5) {
      if (age.length !== 0) setMessages([...messages, age]);
    } else {
      if (name.length !== 0) setMessages([...messages, name]);
      setName("");
    }
    if (messages.length <= 5) dispatch(setUserName(name, age)); // Store the user's name in Redux store
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="h-screen w-full justify-center items-center flex flex-col overflow-y-hidden bg-slate-200">
      <div className="font-bold text-2xl text-center m-5">Chatbot</div>
      <div className="w-full h-screen md:w-2/3 bg-gradient-to-r from-slate-300 to-black rounded-xl  mt-1 border flex-col relative overflow-y-auto pb-20 pt-5 mb-1 shadow-xl shadow-slate-500/30">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={
              (index % 2 !== 0 || index >= 6) &&
              messages[messages.length - 1].length !== 0
                ? "bg-slate-100 p-2 rounded-10 my-1 ml-auto w-1/3 rounded-xl m-8 font-semibold"
                : "bg-slate-100 p-3 rounded-xl w-1/3 self-start m-8 font-semibold"
            }
          >
            {msg}
          </div>
        ))}
      </div>
      <div className="relative bottom-0 w-full flex justify-evenly md:w-7/12 z-10">
        <div className="absolute bottom-0 left-0 mb-4 ml-4 w-4/6 flex justify-center">
          {messages.length === 3 && (
            <input
              type="text"
              className="bg-slate-400 pt-4 pb-4 pl-1 rounded-lg w-full"
              value={name}
              onChange={handleNameChange}
            />
          )}
          {messages.length === 5 && (
            <select
              className="pt-4 pb-4 pl-1 rounded-lg w-full bg-slate-400"
              value={age}
              onChange={handleAgeChange}
            >
              <option value="">Select Age</option>
              {Array.from({ length: 23 }, (_, i) => 18 + i).map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          )}
          {messages.length >= 0 &&
            messages.length !== 3 &&
            messages.length !== 5 &&
            messages.length !== 1 && (
              <input
                type="text"
                className="pt-4 pb-4 pl-1 rounded-lg w-full bg-slate-400"
                value={name}
                onChange={handleNameChange}
              />
            )}
        </div>
        <div>
          <button
            onClick={handleGotItClick}
            className="absolute bottom-0 right-0 mb-4 ml-4 mr-4 w-1/6 flex justify-center bg-blue-500 text-white rounded-lg cursor-pointer pt-4 pb-4 font-bold"
          >
            {messages.length === 1 ? "Got it!" : "Send"}
          </button>
        </div>
      </div>

      {countdown > 0 && (
        <div className="text-1xl m-2 bg-gradient-to-r from-red-100 to-purple-400 p-2 rounded-lg font-bold animate-bounce">
          Bot: Thank you. In {countdown} seconds, bot will exit
        </div>
      )}
    </div>
  );
};

export default Chatbot;
