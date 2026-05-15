import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductList from "./ProductList"
import NavBar from "./NavBar"
import Cart from "./cart"
import Footer from "./Footer"
function App()
{
  return(
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path= "/"  element= {<ProductList />} />
          <Route path="/Cart"  element= {< Cart />} />
         
        </Routes>
        <Footer />
      </BrowserRouter>
    
    </>
  )  
}


export default App