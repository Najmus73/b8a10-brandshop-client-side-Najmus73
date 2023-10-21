import { Link, useLoaderData } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import '../Styles/Style.css'
import HomeCard from '../HomeCard/HomeCard';
const Home = () => {

    const Brands = useLoaderData();
    const filter = Brands.filter(brand=>brand.page == 'home')
    return (
        <div className="relative">
            <div className="lg:flex overflow-hidden">
                <img className="w-[960px] h-[600px]" src="https://i.ibb.co/H4dc59W/manhart.jpg"></img>
                <img className="w-[960px] h-[600px]" src="https://i.ibb.co/cDD5z7F/bmw.jpg"></img>
            </div>
            <div className='h-[100px]'>
            <Marquee pauseOnHover={true} speed={120}>
                   <div className='flex gap-[200px] items-center'>
                   <img className='w-[100px] h-[100px]' src="https://i.ibb.co/k0PRkkf/toyota-3d-vector-logo.png" alt="" />
                    <img className='w-[120px] h-[110px]' src="https://i.ibb.co/Sm7NjJK/ford-logo.png" alt="" />
                    <img className='w-[100px] h-[80px]' src="https://i.ibb.co/ykryX6L/bmw-car-logo.png" alt="" />
                    <img className='w-[100px] h-[80px]' src="https://i.ibb.co/xSP7CSN/mercedes-benz-9-logo-png-transparent.png" alt="" />
                    <img className='w-[100px] h-[100px]' src="https://i.ibb.co/7gVXZqN/tesla-logo-PNG22.png" alt="" />
                    <img className='w-[100px] h-[100px]' src="https://i.ibb.co/qFvkMJT/hyundai-logo.png" alt="" />
                   </div>
            </Marquee>
            </div>

            <div className="h-[100px] flex items-center justify-center" id='text-bg'>
                <h1 className="text-center text-white font-bold text-2xl">“Automotive- where your dreams meet affordability”</h1>
            </div>

            <div className="pt-10 pb-10"><h1 className="text-2xl font-bold text-center">Popular <span className="text-blue-400">Brands</span></h1></div>

            <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 lg:w-[1350px] mx-auto">
                {
                    filter.map(brand =><HomeCard brand={brand}></HomeCard>)
                }
            </div>

            <div className="py-[100px]">
                <img className="w-full" src="https://i.ibb.co/ZV0YgWr/car-Banner.png" alt="" />
                <div className="mt-[-150px] pl-[80px]"><Link to='/register'><button className="p-2 text-white font-bold" style={{ backgroundColor: '#828282' }}>Register Now</button></Link></div>
            </div>
        </div>
    )
}
export default Home;