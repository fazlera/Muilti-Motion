import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Book = () => {
    useEffect(()=>{
        Aos.init({duration:'1000',delay:'500'})
    },[])

    return (
        <div className="bg-blue-900 py-32">
            <div className="text-center text-white space-y-10 "
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
        
            >
                <h5 className="text-lg font-bold">BOOK A CALL</h5>
                <h1 className="text-2xl md:text-5xl font-extrabold">Get a 30-minute, no-cost strategy session with a <br /> Cloud Services expert</h1>
                <button className="bg-white px-16 py-2 text-indigo-950 font-bold text-lg ">Speak to an Expert Today</button>
            </div>
        </div>
    );
};

export default Book;