// import React, { useEffect, useState, useRef} from 'react'
// import './Weather.css'
// import search_icon from '../assets/search.png'
// import clear_icon from '../assets/clear.png'
// import cloud_icon from '../assets/cloud.png'
// import drizzle_icon from '../assets/drizzle.png'
// import rain_icon from '../assets/rain.png'
// import snow_icon from '../assets/snow.png'
// import wind_icon from '../assets/wind.png'
// import humidity_icon from '../assets/humidity.png'


// const Weather = () => {
//   const inputRef = useRef()



//   const [weatherData, setWeatherData] = useState(false);

// //iconc code
//   const allIcons = {
//     "01d": clear_icon,
//     "01n": clear_icon,
//     "02d": clear_icon,
//     "02n": clear_icon,
//     "03d": clear_icon,
//     "03n": clear_icon,
//     "04d": drizzle_icon,
//     "04n": drizzle_icon,
//     "09d": rain_icon,
//     "09n": rain_icon,
//     "10d": rain_icon,
//     "10n": rain_icon,
//     "13d": rain_icon,
//     "13n": rain_icon,
    

//   }

//   const search = async(city) =>{
//     if(city === ""){
//       alert("Enter city name");
//       return;

//     }
//     try{
//       const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
//       console.log(import.meta.env.VITE_APP_ID);

//       const response = await fetch(url);
//       const data = await response.json();

//       if(!response.ok){
//         alert(data.message);
//         return;
//       }

//       console.log(data);
//       const icon = allIcons[data.Weather[0].icon] || clear_icon;
//       setWeatherData({
//         humidity:data.main.humidity,
//         windSpeed: data.main.speed,
//         temperature: Math.floor(data.main.temp),
//         location: data.name,
//         icon:icon
//       })

//     }catch (error){
//       setWeatherData(false);
//       console.error("Error in fetching weather data");


//     }
//   }

// useEffect(()=>{
//   search("London")
// },[])


//   return (
//     <div className='weather'>
//       <div className="search-bar">
//         <input ref={inputRef} type="text" placeholder='Search' />
//         <img src={search_icon} alt="" onClick={()=>search(inputRef.current.value)} />
//       </div>


//       {weatherData?<>
//         <img src={weatherData.icon} alt="" className='weather-icon' />
//       <p className='temperature'>{weatherData.temperature}°C</p>
//       <p className='location'>{weatherData.location}</p>
//       <div className='weather-data'>
//         <div className="col">
//           <img src={humidity_icon} alt="" />
//           <div>
//             <p>{weatherData.humidity} %</p>
//             <span>Humidity</span>
//           </div>
//         </div>
//         <div className="col">
//           <img src={wind_icon} alt="" />
//           <div>
//             <p>{weatherData.windSpeed} Km/h</p>
//             <span>Wind Speed</span>
//           </div>
//         </div>
        
//       </div>
//     </>:<></>}
     
//     </div>
//   )
// }

// export default Weather




// import React, { useEffect, useState, useRef } from 'react';
// import './Weather.css';
// import search_icon from '../assets/search.png';
// import clear_icon from '../assets/clear.png';
// import drizzle_icon from '../assets/drizzle.png';
// import rain_icon from '../assets/rain.png';
// import wind_icon from '../assets/wind.png';
// import humidity_icon from '../assets/humidity.png';

// const Weather = () => {
//   const inputRef = useRef();
//   const [weatherData, setWeatherData] = useState(null);

//   // Icon codes
//   const allIcons = {
//     "01d": clear_icon,
//     "01n": clear_icon,
//     "02d": clear_icon,
//     "02n": clear_icon,
//     "03d": clear_icon,
//     "03n": clear_icon,
//     "04d": drizzle_icon,
//     "04n": drizzle_icon,
//     "09d": rain_icon,
//     "09n": rain_icon,
//     "10d": rain_icon,
//     "10n": rain_icon,
//     "13d": rain_icon,
//     "13n": rain_icon,
//   };

//   const search = async (city) => {
//     if (city === "") {
//       alert("Enter city name");
//       return;
//     }
//     try {
//       const apiKey = import.meta.env.VITE_APP_ID;
//       if (!apiKey) {
//         throw new Error("API key not found");
//       }

//       const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
//       console.log(apiKey);

//       const response = await fetch(url);
//       const data = await response.json();

//       if (!response.ok) {
//         alert(data.message);
//         return;
//       }

//       console.log(data);
//       const icon = allIcons[data.weather[0].icon] || clear_icon;
//       setWeatherData({
//         humidity: data.main.humidity,
//         windSpeed: data.wind.speed,
//         temperature: Math.floor(data.main.temp),
//         location: data.name,
//         icon: icon,
//       });
//     } catch (error) {
//       setWeatherData(null);
//       console.error("Error in fetching weather data:", error.message);
//       alert("Failed to fetch weather data. Please check your API key and network connection.");
//     }
//   };

//   useEffect(() => {
//     search("London");
//   }, []);

//   return (
//     <div className='weather'>
//       <div className="search-bar">
//         <input ref={inputRef} type="text" placeholder='Search' />
//         <img src={search_icon} alt="Search" onClick={() => search(inputRef.current.value)} />
//       </div>

//       {weatherData ? (
//         <>
//           <img src={weatherData.icon} alt="Weather Icon" className='weather-icon' />
//           <p className='temperature'>{weatherData.temperature}°C</p>
//           <p className='location'>{weatherData.location}</p>
//           <div className='weather-data'>
//             <div className="col">
//               <img src={humidity_icon} alt="Humidity" />
//               <div>
//                 <p>{weatherData.humidity} %</p>
//                 <span>Humidity</span>
//               </div>
//             </div>
//             <div className="col">
//               <img src={wind_icon} alt="Wind Speed" />
//               <div>
//                 <p>{weatherData.windSpeed} Km/h</p>
//                 <span>Wind Speed</span>
//               </div>
//             </div>
//           </div>
//         </>
//       ) : null}
//     </div>
//   );
// };

// export default Weather;


import React, { useEffect, useState, useRef } from 'react';
import './Weather.css';
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import drizzle_icon from '../assets/drizzle.png';
import rain_icon from '../assets/rain.png';
import wind_icon from '../assets/wind.png';
import humidity_icon from '../assets/humidity.png';

const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(null);

  // Icon codes
  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": clear_icon,
    "02n": clear_icon,
    "03d": clear_icon,
    "03n": clear_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": rain_icon,
    "13n": rain_icon,
  };

  const search = async (city) => {
    if (city === "") {
      alert("Enter city name");
      return;
    }
    try {
      const apiKey = import.meta.env.VITE_APP_ID;
      console.log("API Key:", apiKey); // Debugging line
      if (!apiKey) {
        throw new Error("API key not found");
      }

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
      console.log("URL:", url); // Debugging line

      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        console.error("API Error:", data.message); // Debugging line
        alert(data.message);
        return;
      }

      console.log("Weather Data:", data); // Debugging line
      const icon = allIcons[data.weather[0].icon] || clear_icon;
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      setWeatherData(null);
      console.error("Error in fetching weather data:", error.message);
      alert("Failed to fetch weather data. Please check your API key and network connection.");
    }
  };

  useEffect(() => {
    search("London");
  }, []);

  return (
    <div className='weather'>
      <div className="search-bar">
        <input ref={inputRef} type="text" placeholder='Search' />
        <img src={search_icon} alt="Search" onClick={() => search(inputRef.current.value)} />
      </div>

      {weatherData ? (
        <>
          <img src={weatherData.icon} alt="Weather Icon" className='weather-icon' />
          <p className='temperature'>{weatherData.temperature}°C</p>
          <p className='location'>{weatherData.location}</p>
          <div className='weather-data'>
            <div className="col">
              <img src={humidity_icon} alt="Humidity" />
              <div>
                <p>{weatherData.humidity} %</p>
                <span>Humidity</span>
              </div>
            </div>
            <div className="col">
              <img src={wind_icon} alt="Wind Speed" />
              <div>
                <p>{weatherData.windSpeed} Km/h</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Weather;
