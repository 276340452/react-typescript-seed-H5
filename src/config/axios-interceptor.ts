import axios from 'axios';

const setupAxiosInterceptors = () => {
  const onRequestSuccess = (config) => config;
  const onResponseSuccess = (response) => response;
  const onResponseError = (err) => Promise.reject(err);
  axios.interceptors.request.use(onRequestSuccess);
  axios.interceptors.response.use(onResponseSuccess, onResponseError);
};

export default setupAxiosInterceptors;
