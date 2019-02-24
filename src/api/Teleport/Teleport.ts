import { createTeleportRequest } from "..";
import { RootObject } from './Teleport.interfaces';

export function fetchTeleportData(lat: number, lon: number): Promise<RootObject> {
  return createTeleportRequest(`api/locations/${lat},${lon}/?embed=location%3Anearest-cities%2Flocation%3Anearest-city`);
}
