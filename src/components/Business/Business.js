import React from 'react';
import  './Business.css'; 

function Business ({business}) {
    
        return( <div className="Business">
        <div className="image-container">
          <img src={business.imageSrc} alt=''/>
        </div>
        <h2>{business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>{`${business.state}`}</p>
            <p>{`${business.zipCode}`}</p>
          </div>
          <div className="Business-reviews">
            <h3>{business.category.toUpperCase()}</h3>
            <h3 className="rating">{`${business.rating} stars`}</h3>
            <p>{`${business.reviewCount} reviews`}</p>
          </div>
        </div>
      </div>)

}
export default Business;
// okay I remember doing this part at least 
// business takes a business object as the prop that it gets from business list component
// I definitely want to customize this project further. I am so happy that I can debug better