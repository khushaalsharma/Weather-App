import React from 'react'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'

const WeatherInfo = ({data}) => {
  return (
    <div>
      <div className='top row'>
        <div className='col'>
          <h1>{data.main.temp} °C</h1>
        </div>
        <div className='col'>
          <h4>{data.name}</h4>
          <h6>{data.weather[0].description}</h6>
          <img alt='weather' src={`icons/${data.weather[0].icon}.png`}></img>
        </div>
      </div>
      <div className='bottom'>
        <div className='row'>
          <div className='col'>
            <h2>{data.main.temp_min} °C</h2>
            <h5>Min Temp</h5>
          </div>
          <div className='col'>
            <h2>{data.main.temp_max} °C</h2>
            <h5>Max Temp</h5>
          </div>
          <div className='col'>
            <h2>{data.main.feels_like} °C</h2>
            <h5>Feels Like</h5>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <h2>{data.main.pressure} hPa</h2>
            <h5>Pressure</h5>
          </div>
          <div className='col'>
            <h2>{data.main.humidity}%</h2>
            <h5>Humidity</h5>
          </div>
          <div className='col'>
            <h2>{data.wind.speed} m/s</h2>
            <h5>Wind Speed</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherInfo
