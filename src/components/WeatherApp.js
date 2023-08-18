import React, { useState } from 'react'
import CitySearch from './CitySearch'
import WeatherInfo from './WeatherInfo'
import 'bootstrap/dist/css/bootstrap.css'

const WeatherApp = () => {

  const [weather, setWeather] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const url = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "5ef7d66871cc4a3a29747314560996aa";


    fetch(
      `${url}?lat=${searchData.lat}&lon=${searchData.lon}&appid=${API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((response) => {
        setWeather(response);
      })
  }
  console.log(weather);

  return (
    <div className='container'>
        <h1 className='text-center mt-5'>WEATHER APP</h1>
        <CitySearch onSearchChange = {handleOnSearchChange}/>
        {weather && <WeatherInfo data={weather}/>}
    </div>
  )
}

export default WeatherApp
