import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { WiHumidity} from "react-icons/wi";
import {BsWind } from "react-icons/bs"
import ShimmerCard from './ShimmerCard';
import {AiOutlineSearch} from "react-icons/ai"

const Weather = () => {


    const [searchParams] = useSearchParams();
    const countryName = searchParams.get("q");
    const [enteredValue, setEnteredValue] = useState("");

    const [countryWeather, setCountryWeather] = useState(null);
    
    
    useEffect(() => {
        getWeatherDetails();
    }, [])

    const getWeatherDetails = async() => {
        const data = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&units=metric&APPID=794ee95e63c5a32aaf88cd813fa2e425`
        );
        const json = await data.json();

        setCountryWeather(json);
        console.log(json)
    }


    if(!countryWeather) return <ShimmerCard/>;

  return (
    <div className="mt-4 py-4 w-1/3 mx-auto bg-cyan-100 rounded flex flex-col gap-6 items-center text-neutral-950">
      
      <span className="text-4xl font-semibold">{countryName}</span>
      <div className="flex flex-col items-center gap-1">
        <div className="text-4xl font-bold">
          {countryWeather.main.temp} &deg;C
        </div>
        <div className="flex items-center gap-2 text-neutral-600 text-sm font-semibold">
          <span>Min: {countryWeather.main.temp_min} &deg;C</span>
          <span>|</span>
          <span>Max: {countryWeather.main.temp_max} &deg;C</span>
        </div>
      </div>
      <div className="flex text-neutral-600 w-11/12 mx-auto justify-around">
        <div className="flex flex-col">
          <div className="flex items-center ">
            <span>
              <WiHumidity />
            </span>
            <span>Humidity</span>
          </div>
          <div className="text-sm font-semibold ps-4">
            {countryWeather.main.humidity} %
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center ">
            <span>
              <BsWind />
            </span>
            <span>Wind</span>
          </div>
          <div className="text-sm font-semibold ps-4">
            {countryWeather.wind.speed} km/hr
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather