import { Link } from "react-router-dom";

const ProductsPage = ({ car }) => {
    
    return (
        <div>
            {
                car ? <>
                    <div className="flex flex-col pb-[30px] pt-[50px] h-[300px]">
                        <div className="card lg:card-side bg-base-100 shadow-xl border border-blue-400">
                            <figure><img className="w-[400px] h-[250px]" src={car.image} alt="Album" /></figure>
                            <div className="flex pl-[100px] gap-[410px] items-center">
                                <div className="flex flex-col leading-8 pl-[20px]">
                                    <h2 className="font-bold">{car.brandName}</h2>
                                    <h2 className="card-title font-bold w-[270px]">{car.name}</h2>
                                    <p className="font-bold">{car.short}</p>
                                    <h1 className="font-bold">{car.type}</h1>
                                    <h1 className="font-bold"> $ {car.price}</h1>
                                    <h1 className="font-bold">{car.rating}</h1>
                                </div>
                                <div className="flex flex-col gap-[100px]">
                                    <div className="">
                                        <Link to={`/${car._id}`}><button className="btn bg-blue-400 font-bold text-white">Details</button></Link>
                                    </div>
                                    <div className="">
                                        <Link to={`/update/${car._id}`}><button className="btn bg-blue-400 font-bold text-white">Update</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </> : <>
                   <div>
                      <h1 className="text-7xl text-green-500">there Have no Item</h1>
                   </div>
                </>
            }
        </div>
    )
}

export default ProductsPage;