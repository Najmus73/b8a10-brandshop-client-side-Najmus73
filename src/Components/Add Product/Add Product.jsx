import swal from 'sweetalert';
const AddProduct = () => {
    const handleAddProduct = e =>{
       e.preventDefault(); 
       const form = e.target;
       const image = form.image.value;
       const name = form.name.value;
       const brandName = form.brandName.value;
       const type = form.type.value;
       const price = form.price.value;
       const short = form.short.value;
       const rating = form.rating.value;
       const newProduct = {image,name,brandName,type,price,short,rating}
       console.log(newProduct);

       fetch('https://automotive-selling-site-server-o01mt5s8s.vercel.app/product',{
          method: 'POST',
          headers: {
            'content-type':'application/json'
          },
          body: JSON.stringify(newProduct)
       })
         .then(res=>res.json())
         .then(data => {
            console.log((data));
            if(data.insertedId){
                swal("Good job!", "Successfully added a product", "success")
            }
         })
    }
    return (
        <div>
            <div className="h-[500px] w-[1350px] mx-auto pt-[50px]">
                <form onSubmit={handleAddProduct}>
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <label>Image</label>
                        <input className="border border-blue-400 py-[5px] pr-[460px]" type="text" name="image" placeholder="Enter Image Url" />
                    </div>
                    <div className="flex flex-col">
                        <label>Name</label>
                        <input className="border border-blue-400 py-[5px] pr-[460px]" type="text" name="name" placeholder="Enter Product Name" />
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <label>Brand Name</label>
                        <input list='data' className="border border-blue-400 py-[5px] pr-[460px]" type="text" name="brandName" placeholder="Enter Brand Name" />
                        <datalist id='data'>
                             <option>TOYOTA</option>
                             <option>FORD</option>
                             <option>BMW</option>
                             <option>MERCEDES</option>
                             <option>TESLA</option>
                             <option>HYUNDAI</option>
                        </datalist>
                    </div>
                    <div className="flex flex-col">
                        <label>Type</label>
                        <input className="border border-blue-400 py-[5px] pr-[460px]" type="text" name="type" placeholder="Enter Type" />
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <label>Price</label>
                        <input className="border border-blue-400 py-[5px] pr-[460px]" type="text" name="price" placeholder="Enter Product Price" />
                    </div>
                    <div className="flex flex-col">
                        <label>Short description</label>
                        <input className="border border-blue-400 py-[5px] pr-[460px]" type="text" name="short" placeholder="Enter Short description" />
                    </div>
                </div>

                <div className="flex flex-col">
                    <label>Rating</label>
                    <input className="border border-blue-400 py-[5px] pr-[460px]" type="text" name="rating" placeholder="Enter rating" />
                </div>

                <div className="pt-[20px]">
                    <input type="submit" value="Add Product" className="btn btn-block bg-blue-400 font-bold text-white" />
                </div>
                </form>

            </div>
        </div>
    )
}

export default AddProduct;