import React from "react";

export const Contact = () =>{
    return (
        <div className="container mx-auto flex flex-col justify-center items-center mt-40 mb-40">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg">
            We'd love to hear from you! If you have any questions, feedback, or
            inquiries, please don't hesitate to reach out to us. You can contact us
            using the following methods:
          </p>
          <ul className="list-disc pl-6 mt-4 flex flex-col gap-9">
            <li className="text-lg">
              Email: <a href="mailto:hmoosa.hh@gmail.com">hmoosa.hh@gmail.com{" "}
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Send Email
                </button>
              </a>
            </li>
            <li className="text-lg">
              Phone: <a href="tel:+919398864534"> Contact number{" "}
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Dial Now
                </button>
              </a>
            </li>
            <li className="text-lg">
              Social Media: Follow us on{" "}
              <a href="https://twitter.com/habeebmoosadev" target="_blank" rel="noopener noreferrer">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Twitter
                </button>
              </a>
            </li>
          </ul>
        </div>
      );
}