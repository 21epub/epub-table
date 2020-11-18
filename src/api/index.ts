import request from '../utils/request'

export const baseUrl = 'http://localhost:7000/api/'

export const getFields = (param: string) => {
  return request(baseUrl + param, {
    method: 'get'
  })
}

export const getTableData = (param: string) => {
  return request(baseUrl + param, {
    method: 'get'
  })
}
