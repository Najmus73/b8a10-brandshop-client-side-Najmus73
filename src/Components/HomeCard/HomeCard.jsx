import { Link } from "react-router-dom";

const HomeCard = ({ brand}) => {
     
    return (
        <div>
            <div className="border border-blue-400 rounded-lg">
                <div className="flex items-center relative">
                    <div className="flex-col">
                        <div><figure><img className="w-[200px] h-[100px] px-[35px]" src={brand.logo} /></figure></div>
                        <h1 className="font-bold text-center">{brand.brand}</h1>
                        <div className="flex justify-center bottom-[0px] left-0 m-auto absolute">
                            <Link to={`Cars/${brand.brand}`}><button className="p-1.5 px-[70.5px] border  bg-blue-400 font-bold text-white border-blue-400 rounded-bl-lg">Details</button></Link>
                        </div>
                    </div>
                    <figure><img className="w-[470px] h-[300px] rounded-r-lg" src={brand.image} /></figure>
                </div>
            </div>
        </div>
    )
}
export default HomeCard;