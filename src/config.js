import axios from 'axios';

let baseURL;
if (process.NODE_ENV === 'production') {
  baseURL = process.env.REACT_APP_PROD_URL;
} else {
  baseURL = process.env.REACT_APP_DEV_URL;
}

const configAxios = axios.create({ baseURL });
configAxios.defaults.withCredentials = true;
export default configAxios;
