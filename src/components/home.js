import React, { useEffect, useState } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { fetchCountry, searchCountry } from '../redux/countries/fetchcountries';
import AllCountry from './allCountries';
import europe from '../images/europe.png';
import '../App.css';

let retriveData = true;
const HomePage = () => {
  const country = useSelector((state) => state.countries, shallowEqual);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (retriveData) {
      dispatch(fetchCountry());
      retriveData = false;
    }
  }, [dispatch]);

  useEffect(() => {
    if (searchTerm !== '') {
      setTimeout(() => {
        dispatch(searchCountry(searchTerm));
      }, 1000);
    } else {
      dispatch(fetchCountry());
    }
  }, [searchTerm]);

  return (
    <div className="home">
      <div className="map">
        <img src={europe} alt="eurpe map" className="map-photo" />
        <div>
          <h3 className="europe-title">Europe</h3>
          <p className="europe-title">746.4 Million</p>
        </div>
        <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="search" placeholder="Search" className="search" />
      </div>
      <div className="title-div">
        <h3 className="title">See All Countries</h3>
      </div>
      <div className="list-page">
        <AllCountry data={country} />
      </div>
    </div>
  );
};

export default HomePage;
