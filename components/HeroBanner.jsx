import React from 'react';



const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">Beats solo air</p>
        <h3>Summer sale</h3>
        <h1>FINE</h1>
        <img src="https://firebasestorage.googleapis.com/v0/b/e-commerse-adminview.appspot.com/o/ecommerce%2Fheadphones_c_2.webp-1697697532170-owso0v6kkk?alt=media&token=55c7ecaf-0ae6-43f3-aa91-d9049e9a1399"
         alt="headphones" className="hero-banner-image" /> 

        <div>
            <button type="button">Shop now</button>
          <div className="desc">
            <h5>Description</h5>
            <p>best headphones on the market</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner