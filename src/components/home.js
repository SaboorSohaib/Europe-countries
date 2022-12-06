import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { fetchCountry } from '../redux/countries/fetchcountries';
import AllCountry from './allCountries';
import europe from '../images/europe.png';
import '../App.css';

let retriveData = true;
const HomePage = () => {
  const country = useSelector((state) => state.countries, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    if (retriveData) {
      dispatch(fetchCountry());
      retriveData = false;
    }
  }, [dispatch]);

  return (
    <div className="home">
      <div className="map">
        <img src={europe} alt="eurpe map" />
        <div>
          <h3 className="europe-title">Europe</h3>
          <p className="europe-title">746.4 Million</p>
        </div>
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
