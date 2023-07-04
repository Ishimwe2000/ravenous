import React,{useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import BusinessList from '../BusinessList/BusinessList.js';
import SearchBar from '../SearchBar/SearchBar.js';
import YelpApi from '../../utils/yelpAPI';

function App() {
  const [businesses, setBusinesses] = useState([]);

  
  // the sorting option array already exists though, I wonder how they will meet if that makes sense
  const searchYelp = async (searchTerm, location, sortingOption) => {
    const businesses = await YelpApi.search(searchTerm, location, sortingOption);
    setBusinesses(businesses);
    // this function I actually understand it. I need to break down this whole project to understand it better
    // onwards we go there is no slowing down
  };
  // so far this function just loggs out the info lol not even doing all that hey, it's making sense now

  return (
    <div className="App">
    <h1>Hungerly</h1>
    <SearchBar searchYelp={searchYelp}/>
    <BusinessList businessList={businesses}/>
    </div>
  );
}

export default App;
// this code I understand for sure ...
// I don't really understand the requirement though I am willing to learn and be challenged
