import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = React.useState(false);
    return (
        <div className="p-5 bg-blue-200 w-full fixed">
            <div className="flex sm:justify-between justify-center">
                <div className="logo mx-10 select-none">
                    <h1 className="text-3xl font-mono cursor-pointer"
                        onClick={
                            () => {
                                navigate('/');
                            }
                        }>HatShare</h1>
                </div>
                <div className="sm:hidden fixed left-0 m-3 mt-0">
                    <button className="text-3xl" onClick={() => setShowMenu(!showMenu)}>
                        ||||
                    </button>
                </div>
                <nav className="hidden links sm:flex flex-row space-x-5 justify-center items-center font-thin mx-10 text-lg">
                    <Link className="hover:text-blue-600 " to="/">Home</Link>
                    <Link className="hover:text-blue-600 " to="/about">About</Link>
                    <Link className="hover:text-blue-600 " to="/contact">Contact</Link>
                </nav>
            </div>
            <nav className={`${showMenu ? "" : "hidden"} links flex flex-col space-y-5 sm:space-y-0 sm:space-x-5 mx-2 mt-10 text-lg`}>
                    <Link className="hover:text-blue-600 " to="/" 
                        onClick={
                            () => {
                                setShowMenu(false);
                            }
                        }
                    >Home</Link>
                    <Link className="hover:text-blue-600 " to="/about"
                        onClick={
                            () => {
                                setShowMenu(false);
                            }
                        }
                    >About</Link>
                    <Link className="hover:text-blue-600 " to="/contact"
                        onClick={
                            () => {
                                setShowMenu(false);
                            }
                        }
                    >Contact</Link>
            </nav>
        </div>
    )
}