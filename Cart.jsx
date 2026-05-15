import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, decQty, incQty, removeFromCart } from './CartSlice';


function Cart() {
  const items = useSelector((state)=>state.cart.items)
  let totalPrice = items.reduce((sum , item)=>sum + item.price * item.quantity, 0)

  let dispatch = useDispatch()

  return (
    <>
    <div className="container mt-4">
       <h2 className="text-center fw-bold mb-4">Shopping Cart 🛒</h2>
      <table className="table table-bordered table-hoveralign-middle shadow-sm">
         <thead className="table-dark">
          <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Price</th>
              <th>qty</th>
              <th>Subtotal</th>
              <th>Action</th>
          </tr>
          </thead>
          { items.length==0 ? <h3 className="text-center py-5" >Your cart is empty 🛒</h3> 
          :
           items && items.map((item)=>(

          <tr>
              <td><img src={item.image} alt={item.title} className='img-fluid' style={{height:"100px"}} /></td>
              <td>{item.title}</td>
              <td>₹{item.price}</td>
              <td>{item.quantity} </td>
              <td>₹{item.price * item.quantity} </td>
              <td className="align-middle text-center">
              <button  className="btn btn-primary btn-sm px-3" onClick={()=>dispatch(incQty(item.id))}> ➕Increase </button> 
               <button className="btn btn-primary btn-sm px-3" onClick={()=>dispatch(decQty(item.id))}>➖ Decrease </button>  
               <button className="btn btn-outline-danger btn-sm px-3" onClick={()=>dispatch(removeFromCart(item.id))}> 🗑 Remove </button>
               </td>
          </tr>
            ))
          }
          
      </table>
      <hr />
      <button className="btn btn-danger px-4" onClick={() => dispatch(clearCart())}>clear Cart </button>
      <h3 className="text-end fw-bold text-primary"> Total Price - ₹{totalPrice} </h3>
    </div>
    </>
  )
}

export default Cart;