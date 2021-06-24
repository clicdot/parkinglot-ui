/* eslint-disable import/no-anonymous-default-export */
import http from './http';

const getAll = () => {
  return http.get('');
};

const getSpace = (building, id) => {
  return http.get(`/${building}/${id}`);
};

const update = (data) => {
  return http.put('', data);
};

export default {
  getAll,
  getSpace,
  update
};
