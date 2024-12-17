import React from 'react'
import Cart1 from "../../../components/cart/cart1"
import img from "../../../../public/assets/shop/item1.png"

const ShoppingCart = () => {
  return (
    <div className='py-[100px]'>
      <Cart1 products={[{id:1,name:"abc",price:123,image:img,quantity:1,rating:4},{id:2,name:"123",price:123,image:img,quantity:1,rating:4}]}/>
    </div>
  )
}

export default ShoppingCart