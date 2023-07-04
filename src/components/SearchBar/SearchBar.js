// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import  './SearchBar.css';


const sortByOptions = {
    'Best Match' : 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
}

function SearchBar ({searchYelp}) {

  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortingOption, setSortingOption] = useState("best_match"); 
  // now I get why these hooks have to be in the Searchbar component, maybe I need to remove the class notations..?
  // yes class components do not work with hooks I get that now
  // I am happy to be back tbh
  const getSortByClass = (sortByOption) => {
    if (sortingOption === sortByOption) {
      return "active";
    }
      return "";  
  };
  // this is to render an active style if the sort option is equal to the sortByOption from the object 
  const handleSortByChange = (sortByOption) => {
    setSortingOption(sortByOption);
  }
  // these are the event handlers that I still do not understand well and that is okay for now
  // the only way to growth is step by step and humility, nothing else
  const handleTermChange = (event) => {
    setSearchTerm(event.target.value);
    setSearchTerm('');
  }
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  }
  const handleSearch = (event) => {
    event.preventDefault();
    searchYelp(searchTerm, location,sortingOption)

  }
  
     const renderSortByOptions = () =>  {  
        return Object.keys(sortByOptions).map(sortByOption => {
        let sortByOptionValue = sortByOptions[sortByOption];
        return (
          <li 
            className={getSortByClass(sortByOptionValue)}
            key={sortByOptionValue}
            onClick={() => {
              handleSortByChange(sortByOptionValue)
            }}>
              {sortByOption}
              </li>
        // list items need keys in React I get that now
        );
    });
   } 
    return (
    <div className="SearchBar">
    <div className="SearchBarSortOptions">
      <ul>
       { renderSortByOptions()}
      </ul>
    </div>
    <form onSubmit={handleSearch}> 
      <div className="SearchBarFields">
        <input placeholder="Search Businesses"  onChange={handleTermChange}/>
        <input placeholder="Where?"  onChange={handleLocationChange}/>
      </div>
      <div className="SearchBarSubmit">
        <button type="submit">Let's Go</button>
      </div>

    </form>
    
  </div>)


} 
export default SearchBar;

// so it does look like I had to refactor this component from class component to function component okay good to know
// I feel disoriented. I want to see the final code and go from there
// how last summer this time was so different. as in wow times really do change who could have known hey
// and next week this time will be even more different wow time is really fickle but also the only constant, just like change