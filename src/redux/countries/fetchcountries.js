import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const SHOWCOUNTRY = 'react-capstone-project/redux/countries/SHOWCOUNTRY';
const GETCOUNTRY = 'react-capstone-project/redux/countries/SHOWCOUNTRY';
const URL = 'https://restcountries.com/v3.1/region/europe';
const SEARCHCOUNTRY = 'https://restcountries.com/v3.1/name';

const countrArray = [];

export const searchCountry = createAsyncThunk('searchCountry', async (name) => {
  try {
    const res = await axios.get(`${SEARCHCOUNTRY}/${name}`);
    return [{
      id: res.data[0].area,
      population: res.data[0].population,
      name: res.data[0].name.official,
      capital: res.data[0].capital[0],
      image: res.data[0].flags.png,
      timezone: res.data[0].timezones[0],
      subregion: res.data[0].subregion,
    }];
  } catch (error) {
    return error;
  }
});

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
    case 'searchCountry/fulfilled': return payload;

    default:
      return state;
  }
};

export default countryReducer;
