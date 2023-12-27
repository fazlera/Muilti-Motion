import { Outlet } from "react-router-dom";
import Navbar from "../Pages/HomePage/Header/Navbar/Navbar";
import Banner from "../Pages/HomePage/Header/Banner/Banner";
import Footer from "../Sheard/Footer/Footer";

const Layout = () => {
    return (
        <div className="font-GoogleFont">

            <div className="relative h-full">
            
            <div className="absolute  top-0  md:top-10 left-0 bottom-0 right-0 z-20">            
            <Navbar></Navbar>            
            </div>

            <div className="">
            <Banner></Banner>
            </div>

            </div>

            <div className="min-h-screen">
            <Outlet></Outlet>
            </div>
           
            <Footer/>
        </div>
    );
};

export default Layout;