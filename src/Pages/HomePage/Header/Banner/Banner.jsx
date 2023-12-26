import { useEffect } from 'react';
import videoSource from '../../../../assets/video/muilty-motion.mp4'
import Aos from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {
    useEffect(()=>{
        Aos.init({duration:'1000',delay:'500'})
    },[])

    return (
       <div  className="bg-black relative">
         <div className="opacity-50 max-h-[800px] overflow-hidden">
            <video className="w-full h-full object-cover"  autoPlay muted loop>
                <source src={videoSource} />
            </video>
        </div>
        <div className='absolute top-20 left-16 md:top-96 md:left-64 text-white  space-y-3 md:space-y-5' 
        data-aos="fade-up"
        data-aos-duration="2000"
        >
            <h1  className='text-xs md:text-6xl font-bold'>Lifting the IT <br /> Resource Burden</h1>
            <h2 className='md:text-xl text-xs'>Cloud and data solutions that reduce risk and control costs, <br /> providing you the time needed to focus on your business</h2>
            <button className='py-2 px-8 font-semibold bg-blue-600'>speak with on expert</button>
        </div>
       </div>
    );
};

export default Banner;