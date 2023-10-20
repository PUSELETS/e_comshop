import React from 'react';

const FooterBanner = () => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>20% off</p>
          <h3>FINE</h3>
          <h3>SMILE</h3>
          <p>15 Oct to 7 Nov</p>
        </div>
        <div className="right">
          <p>Beats Solo Air</p>
          <h3>Summer Sale</h3>
          <p>best headphones on the market</p>
            <button type="button">shop now</button>
        </div>

        <img 
          src="https://firebasestorage.googleapis.com/v0/b/e-commerse-adminview.appspot.com/o/ecommerce%2Fheadphones_c_2.webp-1697697532170-owso0v6kkk?alt=media&token=55c7ecaf-0ae6-43f3-aa91-d9049e9a1399" 
          className="footer-banner-image"
        />
      </div>
    </div>
  )
}

export default FooterBanner