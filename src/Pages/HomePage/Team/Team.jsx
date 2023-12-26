import { useEffect } from 'react';
import image1 from '../../../assets/images/team1.png'
import image2 from '../../../assets/images/team2.png'
import image3 from '../../../assets/images/team3.png'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Team = () => {

    useEffect(()=>{
        Aos.init({duration:'1000',delay:'500'})
    },[])

    return (
        <div className="bg-blue-900 mb-20">
            <div>
                <div className="text-center font-bold text-white py-10"
                 data-aos="fade-down"
                 data-aos-offset="200"
                 data-aos-delay="50"
                 data-aos-duration="1000"
                 data-aos-easing="ease-in-out"
 
                >
                    <h4 className="text-xl">OUR TEAM</h4>
                    <h1 className="text-4xl  font-extrabold">Work With a <span className='text-blue-600'>Team You Can Trust</span> </h1>
                </div>


                <div className="py-10">

                    <div className='w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

                    <div className="card  bg-white  shadow-xl"
                      data-aos="flip-left"
                      data-aos-offset="200"
                      data-aos-delay="50"
                      data-aos-duration="1500"
                      data-aos-easing="ease-in-out"
                    
                    >
                       
                        <div className="card-body text-center space-y-5 mt-4 p-10">
                        <img className='w-24 h-24 mx-auto ' src={image1} alt="image1" />
                            <h2 className="card-title text-2xl font-extrabold text-indigo-900">
                                Expertise in Cloud and <br /> Data Solutions
                            </h2>
                            <p className="text-sm text-gray-500">LefeWare Solutions offers deep expertise in cloud and data management. We enhance your cloud applications performance and optimize your infrastructure, driving business growth and efficiency.</p>
                            
                        </div>
                    </div>

                    <div className="card  bg-white  shadow-xl"
                      data-aos="fade-up"
                      data-aos-offset="200"
                      data-aos-delay="50"
                      data-aos-duration="1500"
                      data-aos-easing="ease-in-out"
                    >
                       
                        <div className="card-body text-center space-y-5 mt-4 p-10">
                        <img className='w-24 h-24 mx-auto ' src={image2} alt="image1" />
                            <h2 className="card-title text-2xl font-extrabold text-indigo-900">
                            We are Committed to <br />  our Partnerships
                            </h2>
                            <p className="text-md text-gray-500">Our approach at LefeWare Solutions is to build long-term, mutually beneficial partnerships. We are more than a service provider; we are a committed partner in your digital transformation journe</p>
                            
                        </div>
                    </div>

                    <div className="card  bg-white  shadow-xl"
                      data-aos="flip-right"
                      data-aos-offset="200"
                      data-aos-delay="50"
                      data-aos-duration="1500"
                      data-aos-easing="ease-in-out"
                    
                    >
                       
                        <div className="card-body text-center space-y-5 mt-4 p-10">
                        <img className='w-24 h-24 mx-auto ' src={image3} alt="image1" />
                            <h2 className="card-title text-2xl font-extrabold text-indigo-900">
                            We Support when you <br /> Need it Most 
                            </h2>
                            <p className="text-md text-gray-500">Choose LefeWare Solutions for responsive, efficient support. We quickly address complex issues and mitigate risks, ensuring seamless business operations without the hassle of delays or multiple calls for help</p>
                            
                        </div>
                    </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Team;