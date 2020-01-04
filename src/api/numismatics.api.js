import {getAxios} from "./base.api";

const axios = getAxios();
axios.defaults.baseURL = "http://numismatics.org/";

export function getCoin(id) {
    return axios.get(`/collection/${id}.xml`);
}
