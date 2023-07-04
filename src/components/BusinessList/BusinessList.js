import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business.js';


// need to revise on how to import and reference  modules
const BusinessList = ({ businessList }) => {
        return (
            <div className="BusinessList">
                {businessList.map((business) => {
                return (
                        <Business business={business} key={business.id}/>
                        )})}              
           </div>
        );
    
};
export default BusinessList;
// this takes the businesses array passed as a prop from App and sends an individual Business object to Business component to display