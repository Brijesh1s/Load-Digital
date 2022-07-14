const API = 'https://restcountries.com/v3.1/all';

export function getCountriesData() {
    return fetch(API).then((res) => res.json());
}