import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { fetchCountry } from '../redux/countries/fetchcountries';
import '../App.css';

const CountriesDetalis = () => {
  const country = useSelector((state) => state.countries, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountry());
  }, [dispatch]);

  const { id } = useParams();
  const index = country.findIndex((item) => item.id === +id);

  return (
    <div className="county-details">
      <div className="flag-name">
        <img src={country[index].image} alt="Flag" />
        <h3>{country[index].name}</h3>
      </div>

      <div>
        <span className="country-info-title">Country Information</span>
      </div>
      <div>
        <div className="info">
          <p>Capital:</p>
          <span>{country[index].capital}</span>
        </div>
        <div className="info">
          <p>Population:</p>
          <span>{country[index].population}</span>
        </div>
        <div className="info">
          <p>Timezone:</p>
          <span>{country[index].timezone}</span>
        </div>
        <div className="info">
          <p>Subregion:</p>
          <span>{country[index].subregion}</span>
        </div>
      </div>
    </div>
  );
};

export default CountriesDetalis;
