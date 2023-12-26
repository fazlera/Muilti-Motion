import { FaRoadLock} from "react-icons/fa6";
import { FaSearchDollar } from "react-icons/fa";
import { HiHomeModern } from "react-icons/hi2";
import { IoSpeedometerSharp } from "react-icons/io5";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Solution = () => {
    useEffect(()=>{
        Aos.init({duration:'1000',delay:'500'})
    },[])


    return (
        <div className="mb-20">
            <div className="text-center space-y-5"
               data-aos="fade-up"
               data-aos-offset="200"
               data-aos-delay="50"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"           
            
            >
            <h4 className="text-blue-600 font-bold text-2xl">The solution</h4>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-indigo-950"><span className="text-blue-600">LefeWare</span> Cloud and Data Technology <br /> <span className="text-blue-600">Solutions</span> </h1>

                    <p className="text-xl font-semibold text-gray-400">
                    Our expert team conducts comprehensive assessments across multiple critical domains, ensuring that your <br /> systems are not only secure but also cost efficient and optimized for peak performance.
                    </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 w-7/12 mx-auto mt-20">

                <div 
                   data-aos="flip-left"
                   data-aos-offset="200"
                   data-aos-delay="50"
                   data-aos-duration="1500"
                   data-aos-easing="ease-in-out"
               
                
                >
                    <div className="border-l-4 border-blue-500 space-y-3 ">
                        <div className="ml-5 space-y-3">
                        <span className="text-4xl text-indigo-950 "><FaRoadLock /></span>
                        <h4 className="text-indigo-950 font-extrabold text-xl">CLOUD SECURITY & THREAT <br /> PROTECTION</h4>
                        </div>
                    </div>
                        <div className="space-y-3 mt-5 ml-5">
                        <h2 className="text-md font-semibold text-gray-400">Assess, configure and mitigate risks <br /> from cyberattacks</h2>
                        <button className="text-md font-bold text-indigo-900 hover:text-blue-700">Read More</button>
                        </div>
                </div>

                <div 
                  data-aos="fade-down"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-out"
                
                >
                    <div className="border-l-4 border-blue-500 space-y-3">
                        <div className="ml-5 space-y-3">
                        <span className="text-4xl text-indigo-950 ">
                            <FaSearchDollar /></span>
                        <h4 className="text-indigo-950 font-extrabold text-xl">CLOUD COST <br /> MANAGEMENT </h4>
                        </div>
                    </div>
                        <div className="space-y-3 mt-5 ml-5">
                        <h2 className="text-md font-semibold text-gray-400">Improved visibility and predictability of <br /> cloud expenses</h2>
                        <button className="text-md font-bold text-indigo-900 hover:text-blue-700">Read More</button>
                        </div>
                </div>

                <div 
                data-aos="flip-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                
                >
                    <div className="border-l-4 border-blue-500 space-y-3 ">
                        <div className="ml-5 space-y-3">
                        <span className="text-4xl text-indigo-950">
                            <HiHomeModern /></span>
                        <h4 className="text-indigo-950 font-extrabold text-xl">DATA GOVERNANCE & REGULATORY  COMPLIANCE  </h4>
                        </div>
                    </div>
                        <div className="space-y-3 mt-5 ml-5">
                        <h2 className="text-md font-semibold text-gray-400">Monitor and comply with regulations <br /> that impact the security of your data  </h2>
                        <button className="text-md font-bold text-indigo-900 hover:text-blue-700">Read More</button>
                        </div>
                </div>

                <div 
                 data-aos="fade-up"
                 data-aos-offset="200"
                 data-aos-delay="50"
                 data-aos-duration="1500"
                 data-aos-easing="ease-in-out"
                >
                    <div className="border-l-4 border-blue-500 space-y-3 ">
                        <div className="ml-5 space-y-3">
                        <span className="text-4xl text-indigo-950 ">
                        <IoSpeedometerSharp />
                            </span>
                        <h4 className="text-indigo-950 font-extrabold text-xl">IMPROVE CLOUD PERFORMANCE </h4>
                        </div>
                    </div>
                        <div className="space-y-3 mt-5 ml-5">
                        <h2 className="text-md font-semibold text-gray-400">Identification and remediation of <br /> issues that impact your customers <br /> and employees </h2>
                        <button className="text-md font-bold text-indigo-900 hover:text-blue-700">Read More</button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Solution;