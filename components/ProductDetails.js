"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useStateContext } from '@/context/StateContext';
import { Product } from '@/components';



const ProductDetails = ({dataC, dataA}) => {
    const { decQty, incQty, qty, onAdd,cartItems } = useStateContext();
    const [index, setIndex] = useState(0);

  return (
    <div>
        
        <div className="product-detail-container">
            <div>
                <div className="image-container">
                <img
                alt = ''
                src={ dataC.imageUrl[index] }
                width={ 350 }
                height={ 350 }
                className="product-detail-image"
                />
                </div>
                <div className="small-images-container">
                
                    {dataC.imageUrl?.map((item, i) => (
                    
                    <img
                        alt = ''
                        key ={i}
                        src={ item }
                        width={ 350 }
                        height={ 350 }
                        className={i === index ? 'small-image selected-image' : 'small-image'}
                        onMouseEnter={() => setIndex(i)}
                    />
                    ))}
                </div>
            </div>
            <div className="product-detail-desc">
                    <h1>{dataC.name}</h1>
                    <div className="reviews">
                        <div>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <p>
                            (20)
                        </p>
                    </div>
                    <h4>Details: </h4>
                    <p>{dataC.value}</p>
                    <p className="price">R{dataC.price}</p>
                    <div className="quantity">
                        <h3>Quantity:</h3>
                        <p className="quantity-desc">
                            <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
                            <span className="num">{qty}</span>
                            <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
                        </p>
                    </div>
                        <div className="buttons">
                            <button type="button" className="add-to-cart" onClick={() => onAdd(dataC, qty)}>Add to Cart</button>
                            <button type="button" className="buy-now"  >Buy Now</button>
                        </div>
                </div>
            </div>

        <div className="maylike-products-wrapper">
          <h2>You may also like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {dataA?.map((item) => (
                <Product key={item._id} product={item}  />
              ))}
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default ProductDetails