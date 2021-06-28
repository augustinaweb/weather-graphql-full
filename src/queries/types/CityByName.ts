/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Unit } from "./../../../types/globalTypes";

// ====================================================
// GraphQL query operation: CityByName
// ====================================================

export interface CityByName_getCityByName_daily_temp {
  readonly __typename: "Temperature";
  readonly day: number;
  readonly night: number;
}

export interface CityByName_getCityByName_daily_weather {
  readonly __typename: "Weather";
  readonly description: string;
  readonly icon: string;
}

export interface CityByName_getCityByName_daily {
  readonly __typename: "Daily";
  readonly dt: number;
  readonly sunrise: number;
  readonly sunset: number;
  readonly temp: CityByName_getCityByName_daily_temp;
  readonly humidity: number;
  readonly wind_speed: number;
  readonly weather: ReadonlyArray<CityByName_getCityByName_daily_weather>;
}

export interface CityByName_getCityByName {
  readonly __typename: "City";
  readonly daily: ReadonlyArray<CityByName_getCityByName_daily>;
}

export interface CityByName {
  readonly getCityByName: CityByName_getCityByName | null;
}

export interface CityByNameVariables {
  readonly name: string;
  readonly units?: Unit | null;
}
