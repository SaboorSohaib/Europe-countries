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
    <div>
      <div className="map">
        <img src={europe} alt="eurpe map" />
        <div>
          <h3>Europe</h3>
          <p>1,400.8 Billion</p>
        </div>
      </div>
      <div className="title-div">
        <h3 className="title">See All Countries</h3>
      </div>
      <AllCountry data={country} />
    </div>
  );
};

export default HomePage;
