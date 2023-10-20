import { Link, useLoaderData, useParams } from 'react-router-dom';
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
                <div className="mt-[-150px] pl-[80px]"><button className="p-2 text-white font-bold" style={{ backgroundColor: '#828282' }}>Register Now</button></div>
            </div>
        </div>
    )
}
export default Home;