import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import getIcon from "./getIcon";

export default function Home() {
  const [data, setData] = useState("");
  const [ipData, setIP] = useState(0);
  const ip = ipData !== 0 ? ipData.data.ip : " ";

  // Fet the current region from the API
  const currentRegion = data !== "" ? data.data.location.name : null;

  //  Get the current temperature from the API
  const currentTemp = data !== "" ? data.data.current.temp_c : null;

  // Get the current weather condition from the API
  const currentCondition =
    data !== "" ? data.data.current.condition.text : null;

  // Get the icon that link that corresponds with the current weather condition
  const currentConditionIcon =
    data !== "" ? data.data.current.condition.icon : "";

  // Get the icon code for the current weather condition
  const iconCode =
    currentConditionIcon !== ""
      ? parseInt(
          currentConditionIcon.substring(
            currentConditionIcon.length - 7,
            currentConditionIcon.length - 3
          )
        )
      : null;

  // need to use useEffect when we want to make API calls. Use an empty dependancy array if we
  // want to only have it execute once after render
  useEffect(() => {
    // API call to the weatherAPI, using axios
    axios
      .get("https://api.ipify.org?format=json")
      .then((res) => setIP(res))
      .catch((error) => console.error(error));

    if (ipData !== 0) {
      axios
        .get(
          `http://api.weatherapi.com/v1/current.json?key=68e5adc58205464b8d783800231010&q=${ip}&aqi=no`
        )
        .then((res) => {
          setData(res);
        })
        .catch((error) => console.log(error));
    }
  }, [ip, ipData]);

  return (
    <div className="main--container">
      <div className="info--container">
        <p className="info--text--city">{currentRegion}</p>
        <p className="info--text">{currentTemp && `${currentTemp}°C`}</p>
        <p className="info--text">{currentCondition}</p>
      </div>
      <Image
        priority={true}
        className="weather--icon"
        src={getIcon(iconCode)}
        alt={`${currentCondition} icon`}
        width={0}
        height={0}
      />
    </div>
  );
}
