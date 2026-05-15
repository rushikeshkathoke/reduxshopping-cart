import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";


function ProductList() {
    let dispatch = useDispatch();
    

    const products = [
        {
            id: 1,
            title: "Wireless Mouse",
            price: 20,
            image: "https://m.media-amazon.com/images/I/71vm32j2InL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            id: 2,
            title: "Monitor",
            price: 5000,
            image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/s-series/s2725h/pdp/monitor-s2725h-pdp-module-hero.psd?fmt=jpg&wid=3000&hei=2063"
        },
        {
            id: 3,
            title: "Headphones",
            price: 2000,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3pDTVqnTsIkAtPQNwxltS1KDSLPrZA09CMA&s"
        }
    ];



    return (
        <>
           <div className='container'>
            <h2 className="text-center fw-bold mb-4"> Our Products 🛍️</h2>
                <div className="row">
                    {
                    
                    products.map((item) => (
                            <div className="col-md-4 mb-4" key={item.id}>
                                <div className="card shadow-sm h-100 border-0 rounded-4">
                                    <div className="card-body" style={{ height:"200px" }}> <img src={item.image} alt={item.title} className="img-fluid rounded" style={{height:"100%"}} /> </div>
                                    <div className="card-footer bg-white border-0 text-center"> <h3 className="fw-bold">{item.title}</h3>
                                        <p className="text-success fw-bold"> {item.price}</p>
                                        <button className="btn btn-primary w-100" onClick={()=>dispatch(addToCart(item))}> 🛒Add to cart</button>
                                    </div>
                               </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}

export default ProductList