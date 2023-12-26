import { useState } from "react";
import { GrMenu ,GrClose } from "react-icons/gr";


const Navbar = () => {
  const [isActive, setIsActive] = useState(false)

  const showMenu = () => {
    setIsActive(!isActive)
  }

  return (
    <div>
      <div className="flex justify-around items-center  p-4 bg-transparent text-white font-semibold">

      <div className="  block relative md:hidden  ">
          <span onClick={showMenu} className="text-2xl">
          {isActive ? <GrClose /> :  <GrMenu /> }
          </span>
         

          <div className={`transition-transform duration-700 ${isActive? 'transform translate-x-0' : ' transform -translate-x-96'}  top-5 left-40`}>  
                 {/* for small device */}
              <div className="list-none font-semibold absolute top-3  shadow-md text-slate-800 bg-gray-200 py-6 rounded-md flex flex-col space-y-2 w-24 px-2">
              <li>home</li>
              <li>service</li>
              <li>contact</li>
              <li>about us</li>
              </div> 

          </div>
        </div>

        <div>logo</div>

          {/* for large device */}
        <div className="hidden md:flex items-center gap-5 list-none">
          <li>home</li>
          <li>service</li>
          <li>contact</li>
          <li>about us</li>
        </div>

        <div>Login</div>
      </div>
    </div>
  );
};

export default Navbar;