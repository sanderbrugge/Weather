import { createOpenWeatherRequest } from "..";
import { OpenWeather } from "./OpenWeather.interfaces";

export function fetchWeatherDataCoordinates(lat: number, lon: number): Promise<OpenWeather> {
  return createOpenWeatherRequest(`data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric`);
}
