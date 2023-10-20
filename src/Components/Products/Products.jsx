import { useLoaderData, useParams } from "react-router-dom";
import ProductsPage from "./ProductsPage";



const Products = () => {
    const allCars = useLoaderData();
    const { brandName } = useParams();
    console.log(brandName);

    const filter = allCars.filter(car => car.brandName == brandName)
    console.log(filter);

    return (
        <div className="w-[1350px] mx-auto">
            <div>
                <div className="carousel h-[500px] ">
                    <div id="item1" className="carousel-item w-full">
                        <img src="https://i.ibb.co/kMYVC9F/toyota-Black.jpg" className="w-full" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src="https://i.ibb.co/wwpdfhN/ford.jpg" className="w-full" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src="https://i.ibb.co/xf7RSJR/bmwCard.jpg" className="w-full" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img src="https://i.ibb.co/QdfxPsY/mercedes-benz.jpg" className="w-full" />
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>

            </div>
            {
                filter.map(car =><ProductsPage car={car}></ProductsPage>)
            }
        </div>
    )
}
export default Products;