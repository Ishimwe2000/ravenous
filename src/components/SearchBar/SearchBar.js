/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import './SearchBar.css';
// it doesn't feel like I am doing a project idk why ..
const sortByOptions = {
    'Best Match' : 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
}
// this reminds me of the hackathon so much, more like too muc
// finding the keys of the API call was easier than I imagined. mxm
class SearchBar extends React.Component {
    renderSortByOptions() {
        
    return Object.keys(sortByOptions).map(sortByOption => {
        let sortByOptionValue = sortByOptions[sortByOption];
        return <li key={sortByOptionValue}>{sortByOption}</li>;
        // we haven't used this yet so I don't know how it works but it will eventually make sense
        // I had missed something here I understand that

    });
   } 
//    since when do we write methods/functions like this... I need more practice and reading. 
// I am not that bad but could definitely do better. I know I can. I just need to keep going. On and On we go. 
// I am a little confused but hope that it will all make sense eventually
// no this is a weird method for sure, need to sit down and understand it
render(){
    return (<div class="SearchBar">
    <div className="SearchBar-sort-options">
      <ul>
       {this.renderSortByOptions()} 
       {/* hope this above function works but if it doesn't that's okay too */}
      </ul>
    </div>
    <div className="SearchBar-fields">
      <input placeholder="Search Businesses" />
      <input placeholder="Where?" />
    </div>
    <div className="SearchBar-submit">
      <a>Let's Go</a> 
      {/* might change this above element into a button tbh, just waiting it out in case there are some changes to be done ...  */}
    </div>
  </div>)
}

} 
export default SearchBar;