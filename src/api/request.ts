const baseUrl = 'https://yapi.epub360.com/mock/104/api/table/';

export const getColumns = (param: string) => {
  return fetch(baseUrl + param);
};

export const getRows = (param: string) => {
  return fetch(baseUrl + param);
};
