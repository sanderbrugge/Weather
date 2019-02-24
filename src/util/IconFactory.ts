import { WeatherMain } from "../api/OpenWeather/OpenWeather.interfaces";
import { Icons } from "react-native-fontawesome";


export function getIcon(input: WeatherMain) {
  switch(input) {
    case "Rain": return Icons.tint;
    case "Atmosphere": return Icons.cloud;
    case "Clear": return Icons.sun;
    case "Clouds": return Icons.cloud;
    case "Drizzle": return Icons.cloud;
    case "Snow": return Icons.snowflake;
    case "Thunderstorm": return Icons.bolt;
  }
}
