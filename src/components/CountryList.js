
import React, { useEffect, useState } from 'react'
import Country from './Country';


const CountryList = () => {

    const [countries, setCountries] = useState(null);

    useEffect(() => {
        getCountriesList();
    }, []);

    const getCountriesList = async () => {

        const data = await fetch(
          "https://countriesnow.space/api/v0.1/countries"
        );
        const json = await data.json();

        setCountries(json?.data?.map(x => x.country));
    }

    if(!countries) return;

  return (
    <div>
        <h1 className='text-4xl font-bold bg-cyan-100 text-center py-4 text-neutral-600'>Get weather country wise</h1>
      <ul className="h-screen w-1/2 mx-auto overflow-y-scroll">
        {countries.map((country) => (
          <Country name={country} />
        ))}
      </ul>
    </div>
  );
}

export default CountryList