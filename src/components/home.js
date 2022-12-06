import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { fetchCountry } from '../redux/countries/fetchcountries';
import AllCountry from './allCountries';
import europe from '../images/europe.png';

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
      <div>
        <img src={europe} alt="eurpe map" />
        <div>
          <h3>Europe</h3>
          <p>1,400.8 Billion</p>
        </div>
      </div>
      <div>
        <h3>See All Countries</h3>
      </div>
      <AllCountry data={country} />
    </div>
  );
};

export default HomePage;
