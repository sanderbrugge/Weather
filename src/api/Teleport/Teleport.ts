import { createTeleportRequest } from "..";

export function fetchTeleportData(lat: number, lon: number): Promise<any> {
  return createTeleportRequest(`api/locations/${lat},${lon}/?embed=location%3Anearest-cities%2Flocation%3Anearest-city`);
}
