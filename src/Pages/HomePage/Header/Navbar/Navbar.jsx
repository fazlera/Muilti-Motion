import { useState } from "react";
import { GrMenu ,GrClose } from "react-icons/gr";
import {  NavLink } from "react-router-dom";


const Navbar = () => {
  const [isActive, setIsActive] = useState(false)

  const showMenu = () => {
    setIsActive(!isActive)
  }

  return (
    <div>
      <div className="flex justify-around items-center  p-4 bg-transparent text-white md:text-2xl uppercase font-semibold">

      <div className="  block relative md:hidden  ">
          <span onClick={showMenu} className="text-2xl">
          {isActive ? <GrClose /> :  <GrMenu /> }
          </span>
         

          <div className={`transition-transform duration-700 ${isActive? 'transform translate-x-0' : ' transform -translate-x-96'}  top-5 left-40`}>  
                 {/* for small device */}
              <div className="list-none font-semibold absolute top-3  shadow-md text-slate-800 bg-gray-200 py-6 rounded-md flex flex-col space-y-2 w-32 px-2">

          <NavLink to={'/'} className={({ isActive, isPending }) =>isActive  ? "active text-red-600  underline" : isPending ? "pending": "" }><li>home</li>
          </NavLink>

          <NavLink to={'/service'}  className={({ isActive, isPending }) =>isActive  ? "active text-red-600  underline" : isPending ? "pending": "" }><li>service</li>
          </NavLink>

          <NavLink to={'/about'}  className={({ isActive, isPending }) =>isActive  ? "active text-red-600 underline" : isPending ? "pending": "" }><li>about</li>
          </NavLink>

          <NavLink to={'/contact'}  className={({ isActive, isPending }) =>isActive  ? "active text-red-600  underline" : isPending ? "pending": "" }><li>contact-us</li>
          </NavLink>

              </div> 

          </div>
        </div>

        <div>logo</div>

          {/* for large device */}
        <div className="hidden md:flex items-center gap-5 list-none">

          <NavLink to={'/'} className={({ isActive, isPending }) =>isActive  ? "active text-red-600  underline" : isPending ? "pending": "" }><li>home</li>
          </NavLink>

          <NavLink to={'/service'}  className={({ isActive, isPending }) =>isActive  ? "active text-red-600  underline" : isPending ? "pending": "" }><li>service</li>
          </NavLink>

          <NavLink to={'/about'}  className={({ isActive, isPending }) =>isActive  ? "active text-red-600 underline" : isPending ? "pending": "" }><li>about</li>
          </NavLink>

          <NavLink to={'/contact'}  className={({ isActive, isPending }) =>isActive  ? "active text-red-600  underline" : isPending ? "pending": "" }><li>contact-us</li>
          </NavLink>
          
        </div>

        <div>Login</div>
      </div>
    </div>
  );
};

export default Navbar;