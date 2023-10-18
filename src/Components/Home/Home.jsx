import '../Styles/Style.css'
const Home = () => {
    return (
        <div className="">
            <div className="lg:flex overflow-hidden">
                <img className="w-[960px] h-[600px]" src="https://i.ibb.co/H4dc59W/manhart.jpg"></img>
                <img className="w-[960px] h-[600px]" src="https://i.ibb.co/cDD5z7F/bmw.jpg"></img>
            </div>

            <div className="h-[100px] flex items-center justify-center"id='text-bg'>
                  <h1 className="text-center text-white font-bold text-2xl">“Automotive- where your dreams meet affordability”</h1>
            </div>
            
            <div className="pt-10 pb-10"><h1 className="text-2xl font-bold text-center">Popular <span className="text-blue-400">Brands</span></h1></div>

            <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 lg:w-[1350px] mx-auto">

                <div className="border border-blue-400 rounded-lg">
                    <div className="flex items-center">
                        <div className="flex-col">
                            <figure><img className="w-[200px]" src="https://i.ibb.co/k0PRkkf/toyota-3d-vector-logo.png" /></figure>
                            <h1 className="font-bold text-center">TOYOTA</h1> <div className="flex justify-center"><button className="p-1.5 w-full border  bg-blue-400 font-bold text-white border-blue-400">Details</button></div>
                        </div>
                        <figure><img className="w-[470px] h-[300px] rounded-lg" src="https://i.ibb.co/kMYVC9F/toyota-Black.jpg" /></figure>
                    </div>
                </div>

                <div className="border border-blue-400 rounded-lg">
                    <div className="flex items-center">
                        <div className="flex-col">
                            <figure><img className="w-[200px]" src="https://i.ibb.co/Sm7NjJK/ford-logo.png" /></figure>
                            <h1 className="font-bold text-center">FORD</h1> <div className="flex justify-center"><button className="p-1.5 w-full border  bg-blue-400 font-bold text-white border-blue-400">Details</button></div>
                        </div>
                        <figure><img className="w-[470px] h-[300px] rounded-lg" src="https://i.ibb.co/wwpdfhN/ford.jpg" /></figure>
                    </div>
                </div>

                <div className="border border-blue-400 rounded-lg">
                    <div className="flex items-center">
                        <div className="flex-col w-[200px]">
                            <figure><img className="w-[160px] pl-[35px]" src="https://i.ibb.co/ykryX6L/bmw-car-logo.png" /></figure>
                            <h1 className="font-bold text-center">BMW</h1> <div className="flex justify-center"><button className="p-1.5 w-full border  bg-blue-400 font-bold text-white border-blue-400">Details</button></div>
                        </div>
                        <figure><img className="w-[470px] h-[300px] rounded-lg" src="https://i.ibb.co/xf7RSJR/bmwCard.jpg" /></figure>
                    </div>
                </div>


                <div className="border border-blue-400 rounded-lg">
                    <div className="flex items-center">
                        <div className="flex-col w-[200px]">
                            <figure><img className="w-[150px] pl-[35px]" src="https://i.ibb.co/xSP7CSN/mercedes-benz-9-logo-png-transparent.png" /></figure>
                            <h1 className="font-bold text-center text-blue-400">MERCEDES</h1> <div className="flex justify-center"><button className="p-1.5 w-full border  bg-blue-400 font-bold text-white border-blue-400">Details</button></div>
                        </div>
                        <figure><img className="w-[470px] h-[300px] rounded-lg" src="https://i.ibb.co/QdfxPsY/mercedes-benz.jpg" /></figure>
                    </div>
                </div>


                <div className="border border-blue-400 rounded-lg">
                    <div className="flex items-center">
                        <div className="flex-col">
                            <figure><img className="w-[200px]" src="https://i.ibb.co/7gVXZqN/tesla-logo-PNG22.png" /></figure>
                            <h1 className="font-bold text-center text-blue-400">TESLA</h1> <div className="flex justify-center"><button className="p-1.5 w-full border  bg-blue-400 font-bold text-white border-blue-400">Details</button></div>
                        </div>
                        <figure><img className="w-[470px] h-[300px] rounded-lg" src="https://i.ibb.co/8grBK8G/2022-tesla.jpg" /></figure>
                    </div>
                </div>

                <div className="border border-blue-400 rounded-lg">
                    <div className="flex items-center">
                        <div className="flex-col">
                            <figure><img className="w-[200px]" src="https://i.ibb.co/qFvkMJT/hyundai-logo.png" /></figure>
                            <h1 className="font-bold text-center text-blue-400">HYUNDAI</h1> <div className="flex justify-center"><button className="p-1.5 w-full border  bg-blue-400 font-bold text-white border-blue-400">Details</button></div>
                        </div>
                        <figure><img className="w-[470px] h-[300px] rounded-lg" src="https://i.ibb.co/5k3m4Ms/hyundai-sonata.jpg" /></figure>
                    </div>
                </div>
          
            </div>

            <div className="py-[100px]">
                <img className="w-full" src="https://i.ibb.co/ZV0YgWr/car-Banner.png" alt="" />
                <div className="mt-[-150px] pl-[80px]"><button className="p-2 text-white font-bold"style={{backgroundColor:'#828282'}}>Register Now</button></div>
            </div>
        </div>
    )
}
export default Home;