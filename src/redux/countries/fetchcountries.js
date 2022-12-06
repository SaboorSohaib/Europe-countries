import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const SHOWCOUNTRY = 'react-capstone-project/redux/countries/SHOWCOUNTRY';
const GETCOUNTRY = 'react-capstone-project/redux/countries/SHOWCOUNTRY';
const URL = 'https://restcountries.com/v3.1/region/europe';

const countrArray = [];

export const fetchCountry = createAsyncThunk(SHOWCOUNTRY, async () => {
  const res = await axios.get(URL);
  const resultArray = res.data;

  return {
    country: resultArray.map((value) => ({
      id: value.area,
      population: value.population,
      name: value.name.official,
      capital: value.capital[0],
      image: value.flags.png,
      timezone: value.timezones[0],
      subregion: value.subregion,
    })),
  };
});

export const getcountry = createAsyncThunk(GETCOUNTRY, async (id) => ({
  id,
}));

const countryReducer = (state = countrArray, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'react-capstone-project/redux/countries/SHOWCOUNTRY/fulfilled':
      return payload.country;

    default:
      return state;
  }
};

export default countryReducer;
