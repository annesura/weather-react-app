import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    console.log(
      `The weather in ${response.data.city} is ${response.data.temperature.current} degrees`
    );
  }
  let apiKey = "0cca9cddf1f4t4bb307e8bfo1fa213f2";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  return <></>;
}
