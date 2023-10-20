"use client"
import { FooterBanner, HeroBanner, Product } from '@/components';
import { useStateContext } from '@/context/StateContext';
import { useEffect } from 'react';

import React from 'react'

const Home = function ({ data }) {
  const { setDataA, dataA } = useStateContext();
  useEffect(()=>{
    if(data){
      setDataA(data)
    }
  },[])
  console.log(dataA, "mishack")

  return (
    <div>
        <HeroBanner />
        <div className="products-heading">
            <h2>Best Seller Products</h2>
            <p>speaker There are many variations passages</p>
        </div>

        <div className="products-container">
            {data?.map((product) => <Product key={product._id} product={product} /> )}
        </div>
        <FooterBanner />
    </div>
  )
}

export default Home