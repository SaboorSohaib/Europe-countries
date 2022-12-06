import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './countries/fetchcountries';

const store = configureStore({
  reducer: {
    countries: countryReducer,
  },
});

export default store;
