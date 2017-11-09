import { request } from "app/utils/request";
import { GET_COUNTRY_FIFA } from "./actionTypes";

export function setCountryFifa(country) {
  return { country, type: GET_COUNTRY_FIFA };
}

export function getCountryFifa(params = {}) {
  return dispatch => {
    return request().get("/matches/country", { params })
    .then(response => {
      dispatch(setCountryFifa(response.data));
    });
  };
}

export default {
  getCountryFifa,
};
