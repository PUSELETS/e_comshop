"use client"
import { useRouter } from "next/navigation";

import React from 'react'

const Product = ({ product }) => {

  const router = useRouter();

  return (
    <div
    onClick={()=> router.push(`/product/${product._id}`)}
    >
        <div className="product-card">
        <img
            alt = ''
            src={  product.imageUrl[3] }
            width={ 200 }
            height={ 200 }
            className="product-image"
          />
          <p className="product-name">{product.name}</p>
          <p className="product-price">R{product.price}</p>
        </div>
    </div>
   
  )
}

export default Product
