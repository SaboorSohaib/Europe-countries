import React from "react";
import SingelCountry from "./singleCountry";
const AllCountry = ({data}) => (
    <div>
        {data?.map((countryData, idx) => (
            <SingelCountry
                key={countryData.id}
                index={idx}
                id={countryData.id}
                image={countryData.image}
                population={countryData.population}
                name={countryData.name}
                langeuages={countryData.langeuages}
                capital={countryData.capital}
                timezone={countryData.timezone}
                subregion={countryData.subregion}
            />
        ))}
    </div>
);
export default AllCountry;