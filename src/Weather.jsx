import React, { useState } from "react";

export default function Weather() {
  const [cityName, setcityName] = useState("jaipur");
  const [weather, setWeather] = useState({});
  const handleChange = (e) => {
    setcityName(e.target.value);
  };

  const handleSearch = () => {
    const apiKey = "3ce22ad1c0f2407295cf75f87c3335c1";
    if (cityName) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setWeather(data);
          console.log(data);
        })
        .catch((error) => {
          console.log("error occured", error);
        });
    }
  };
  return (
    <div className="bg-image bg-cover bg-no-repeat h-screen flex justify-center items-center">
      <div className="w-3/5 h-4/5 bg-slate-600  rounded-lg flex">
        {/* left side */}
        <div className="bg-left w-1/2 h-full bg-cover rounded-l-lg relative">
          <div className="flex justify-end">
            <p className="text-2xl text-black font-bold mt-2 me-2">
              {weather.name && weather.name}
              {weather.sys && weather.sys.country}
            </p>
          </div>
          <div className=" flex justify-between h-4/5 items-end m-3 ">
            <div className="ms-2 absolute bottom-1 ">
              <p className="text-white font-bold text-2xl ">
                {weather.coord && weather.coord.lat}
              </p>
              <p className="text-white font-bold text-2xl ">
                {weather.coord && weather.coord.lon}
              </p>
            </div>
            <p className="text-white font-bold text-2xl me-2 absolute bottom-1 right-1">
              {weather.main && weather.main.temp}
            </p>
          </div>
        </div>
        {/* right side */}
        <div className="w-1/2">
          <div>
            <p className="mt-20">
              <input
                type="text"
                placeholder="Enter City"
                className="w-3/4 bg-transparent text-2xl pl-3"
                value={cityName}
                onChange={handleChange}
              />
              <button
                className="w-1/4 font-bold text-2xl"
                onClick={handleSearch}
              >
                search
              </button>
            </p>
          </div>
          <div className="text-center mt-10 font-bold text-2xl text-gray-300">
            <p>
              {weather.name && weather.name},
              {weather.sys && weather.sys.country}
            </p>
            <p>{weather.weather && weather.weather[0].main}</p>
          </div>
          <div className="mt-30">
            <div className="flex justify-around mt-10 text-2xl font-semibold border-b-2 border-gray-300 m-4 p-3">
              <p>visibility</p>
              <p>{weather.visibility && weather.visibility / 1000}km</p>
            </div>
            <div className="flex justify-around mt-10 text-2xl font-semibold border-b-2 border-gray-300 m-4 p-3">
              <p>wind speed</p>
              <p>{weather.wind && weather.wind.speed}km/h</p>
            </div>
            <div className="flex justify-around mt-10 text-2xl font-semibold border-b-2 border-gray-300 m-4 p-3">
              <p>Temp</p>
              <p>{weather.main && weather.main.temp}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
