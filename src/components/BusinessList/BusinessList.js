import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business.js';
// need to revise on how to import and reference  modules
class BusinessList extends React.Component {
    render(){
        return (
            <div className="BusinessList">
                    <Business />
                    <Business />
                    <Business />
                    <Business />
                    <Business />
                    <Business />
                    {/* I get it!! this is the part for rendering the hard-coded Business objects okay gurl okay!! */}
                
</div>
        )
    }
}
export default BusinessList;