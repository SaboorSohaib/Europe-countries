import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { fetchCountry } from '../redux/countries/fetchcountries';

const CountriesDetalis = () => {
  const country = useSelector((state) => state.countries, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountry());
  }, [dispatch]);

  const { id } = useParams();
  const index = country.findIndex((item) => item.id === +id);

  return (
    <div>
      <div>
        <img src={country[index].image} alt="Flag" />
        <h3>{country[index].name}</h3>
      </div>

      <div>
        <span>Country Information</span>
      </div>
      <div>
        <div>
          <p>Capital:</p>
          <span>{country[index].capital}</span>
        </div>

        <div>
          <p>Population:</p>
          <span>{country[index].population}</span>
        </div>
        <div>
          <p>Timezone:</p>
          <span>{country[index].timezone}</span>
        </div>
        <div>
          <p>Subregion:</p>
          <span>{country[index].subregion}</span>
        </div>
      </div>
    </div>
  );
};

export default CountriesDetalis;
