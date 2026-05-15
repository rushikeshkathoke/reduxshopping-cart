import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


function NavBar() {
        const items = useSelector((state)=>state.cart.items)

        const totalQty = items.reduce((sum , item)=>sum + item.quantity,0)


    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-4">

                <Link className="navbar-brand" to="/"> My Shopping Cart</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/"> Home <span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                    </ul>

                   
                    <span className="navbar-text ">
                        <Link to="/cart" className="btn btn-primary"> Cart <span className="badge badge-light"> {totalQty} </span></Link>
                    </span>
                </div>
            </nav>

        </>
    )
}

export default NavBar