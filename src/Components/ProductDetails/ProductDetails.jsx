import { Link, useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {

    const allCars = useLoaderData();

    const { _id } = useParams();

    const find = allCars.find(car => car._id == _id)


  
    return (
        <div className="w-[1350px] mx-auto pt-[50px] pb-[50px] ">
            <div className="card lg:card-side bg-base-100 shadow-xl border border-blue-400">
                <figure><img className="w-[800px] h-[400px]" src={find.image} alt="Album" /></figure>
                <div className="leading-[50px] pt-[50px] pl-[130px]">
                    <h2 className="card-title">{find.name}</h2>
                    <p className="font-bold">{find.short}</p>
                    <p className="font-bold">{find.price}</p>
                    <p className="font-bold">5/{find.rating}</p>
                    <div className="">
                        <Link to='/myCart'><button className="btn bg-blue-400 font-bold text-white" onClick={()=>findObject()}>Add to Cart</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDetails;