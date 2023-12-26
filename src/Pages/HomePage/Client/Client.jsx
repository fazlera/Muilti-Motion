import { useEffect } from 'react'
import image1 from '../../../assets/logo/01_athena_health_logo.png'
import image2 from '../../../assets/logo/02_cae_logo.png'
import image3 from '../../../assets/logo/03_psc_logo.png'
import image4 from '../../../assets/logo/04_acep_logo.png'
import image5 from '../../../assets/logo/05_att_logo.png'
import image6 from '../../../assets/logo/06_safe_foods_logo.png'
import image7 from '../../../assets/logo/Cisco-e1699280358266.png'
import image8 from '../../../assets/logo/goeasy.png'

import Aos from 'aos';
import 'aos/dist/aos.css';


const Client = () => {

    useEffect(()=>{
        Aos.init({duration:'1000',delay:'500'})
    },[])


    return (
        <div>
            <div className="text-center space-y-4 py-10"

            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
   
            >
                <h5 className="text-blue-700 font-semibold">OUR SATISFIED CLIENTS</h5>
                <h1 className="md:text-5xl text-3xl font-extrabold">Leading Companies in Various Industries Across <br /> the Globe <span className="text-blue-700">Trust LefeWare Solutions</span></h1>
            </div>
               
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 py-10 w-8/12 mx-auto'>
                <div
                data-aos="fade-down"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                ><img src={image1} alt="1" /></div>

                <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                ><img src={image2} alt="2" /></div>

                <div
                data-aos="fade-down"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                ><img src={image3} alt="3" /></div>

                <div
                   data-aos="zoom-in"
                   data-aos-offset="200"
                   data-aos-delay="50"
                   data-aos-duration="1500"
                   data-aos-easing="ease-in-out"
                ><img src={image4} alt="4" /></div>

                <div
                   data-aos="fade-down"
                   data-aos-offset="200"
                   data-aos-delay="50"
                   data-aos-duration="1500"
                   data-aos-easing="ease-in-out"
                ><img src={image5} alt="5" /></div>

                <div
                data-aos="zoom-in-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                ><img src={image6} alt="6" /></div>
                <div
                data-aos="zoom-in-down"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                ><img src={image7} alt="7" /></div>

                <div
                data-aos="fade-down"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                ><img src={image8} alt="8" /></div>
            </div>
        </div>
    );
};

export default Client;