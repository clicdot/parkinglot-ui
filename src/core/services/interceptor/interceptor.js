const onRequest = (config) => {
  console.info(`[request] [${JSON.stringify(config)}]`);
  return config;
}

const onRequestError = (error) => {
  console.error(`[request error] [${JSON.stringify(error)}]`);
  return Promise.reject(error);
}

const onResponse = (response) => {
  console.info(`[response] [${JSON.stringify(response)}]`);
  if (response.data.data) {
    return response.data.data;
  } else {
    Promise.reject(response.response.message);
  }
}

const onResponseError = (error) => {
  console.error(`[response error] [${JSON.stringify(error)}]`);

  alert('Parking Lot Full!');
  return Promise.reject(error);
}

export const setupInterceptors = (axiosInstance) => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}
