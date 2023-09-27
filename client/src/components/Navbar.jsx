import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () =>{
    const navigate = useNavigate();
    return(
        <div className="navbar flex flex-row p-5 justify-between bg-blue-200">
            <div className="logo mx-10 select-none">
                <h1 className=" text-3xl font-mono cursor-pointer"
                onClick={
                    () => {
                        navigate('/');
                    }
                }>HatShare</h1>
            </div>
            <nav className="links flex flex-row space-x-5 justify-center items-center font-thin mx-10 text-lg">
                <Link className="hover:text-blue-600 " to="/">Home</Link>
                <Link className="hover:text-blue-600 " to="/about">About</Link>
                <Link className="hover:text-blue-600 " to="/contact">Contact</Link>
            </nav>
        </div>
    )
}