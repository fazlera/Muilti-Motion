import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Problem = () => {
    useEffect(()=>{
        Aos.init({duration:'1000',delay:'500'})
    },[])


    return (
        <div>
            <div className="relative mb-10">

            <div  className="md:h-[500px] h-[1000px] bg-gray-50 py-5  mt-32   text-center space-y-4 "
             data-aos="fade-up"
             data-aos-offset="200"
             data-aos-delay="50"
             data-aos-duration="1000"
               
            >
                    <h4 className="text-blue-600 font-bold text-2xl">The Problem</h4>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-indigo-950">Your Workforce <span className="text-blue-600">Does Not Have the Capacity or <br /> Skills </span> Required to Keep Up.</h1>
                </div>

                <div className="md:h-96 h-[1350px] bg-blue-900 py-60">
                    <div className="w-10/12 md:w-7/12 mx-auto absolute top-60 lg:bottom-80 inset-x-0" > 

                    <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5  ">

                        <div className="" 
                        data-aos="fade-down"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        
                        >
                        <div className="bg-white  rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                        <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-60 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-xs py-5 text-blue-600 font-semibold ">UNSECURED AND UNPATCHED RESOURCES</h2>
                                <p className="dark:text-gray-100 text-xl font-bold text-indigo-950">Businesses must continuously assess and meticulously address cloud security.</p>
                                <p className="text-lg text-gray-400 font-semibold">
                                By not staying up to date on the latest threats and solutions, they are unable to maintain robust protection against increasingly sophisticated cyber attacks.
                                </p>
                            </div>
                            <button type="button" className="flex items-center justify-start w-full  font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900">Read more</button>
                        </div>
                         </div>
                      </div>

                        <div className=""
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1500"
                        
                        >
                        <div className="bg-white  rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                        <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-60 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-xs py-5 text-blue-600 font-semibold ">UNSECURED AND UNPATCHED RESOURCES</h2>
                                <p className="dark:text-gray-100 text-xl font-bold text-indigo-950">Businesses must continuously assess and meticulously address cloud security.</p>
                                <p className="text-lg text-gray-400 font-semibold">
                                By not staying up to date on the latest threats and solutions, they are unable to maintain robust protection against increasingly sophisticated cyber attacks.
                                </p>
                            </div>
                            <button type="button" className="flex items-center justify-start w-full  font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900">Read more</button>
                        </div>
                         </div>
                        </div>

                        <div className=""
                        data-aos="fade-down"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="2000"
                        
                        
                        >
                        <div className="bg-white  rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                        <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-60 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-xs py-5 text-blue-600 font-semibold traci">UNSECURED AND UNPATCHED RESOURCES</h2>
                                <p className="dark:text-gray-100 text-xl font-bold text-indigo-950">Businesses must continuously assess and meticulously address cloud security.</p>
                                <p className="text-lg text-gray-400 font-semibold">
                                By not staying up to date on the latest threats and solutions, they are unable to maintain robust protection against increasingly sophisticated cyber attacks.
                                </p>
                            </div>
                            <button type="button" className="flex items-center justify-start w-full  font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900">Read more</button>
                        </div>
                         </div>
                        </div>
                        
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Problem;