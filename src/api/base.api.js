import axios from 'axios';

axios.defaults.validateStatus = (status) => status <= 500;// Reject only if the status code is greater than or equal to 500;

export function getAxios() {
    return axios;
}
