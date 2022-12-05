import { configureStore } from "@reduxjs/toolkit";
import countryReducer from './countries/fetchcountries';

const store = configureStore({
    reducer: {
        Countries: countryReducer,
    }
});

export default store;
