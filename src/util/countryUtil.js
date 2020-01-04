import countries from "../data/countries"


export function getCountryCode(country){
    if(!!country){
        const code = Object.keys(countries).find(c => c === country);
        if(!!code){
            return countries[code];
        }
    }
}
