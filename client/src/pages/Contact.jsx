import React, { useState } from "react";
import Axios from "axios";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const sendContact = async () => {
    await Axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/contact`,
      { name, email, msg }
    ).then((res) => {
      console.log(res);
      setName("");
      setEmail("");
      setMsg("");
      alert("Message sent successfully!");
    }).catch((err) => {
      console.log(err);
      alert("Message failed to send!");
    });
  };

  return (
    <div className="container mx-auto flex flex-col justify-center items-center mb-40">
      <div className="mt-32 bg-blue-200 p-10 rounded-md">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <div className="flex flex-col space-y-10 sm:w-96 w-64">
          <input type="text" placeholder="Enter your name" className="h-10 p-2 rounded-md"
            onChange={(e) => { setName(e.target.value) }}
          />
          <input type="email" placeholder="Enter your email" className="h-10 p-2 rounded-md"
            onChange={(e) => { setEmail(e.target.value) }}
          />
          <textarea placeholder="Enter your message" className="h-48 p-2 rounded-md"
            onChange={(e) => { setMsg(e.target.value) }}
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={sendContact}
          >Submit</button>
        </div>
      </div>
    </div>
  );
}