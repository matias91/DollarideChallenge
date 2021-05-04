// @Vendors
import apisauce from 'apisauce';

// API's
import googleApi from './Google';

const create = () => {
  const api = apisauce.create({
    baseURL: 'https://maps.googleapis.com/maps/api/',
    headers: {
      Accept: 'application/json',
      'Cache-Control': 'no-cache',
      'Content-type': 'application/json',
    },
    timeout: 100000,
  });

  return {
    ...googleApi.create(api)
  };
};

export default { create };
