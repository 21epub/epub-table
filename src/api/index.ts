import request from '../utils/request'

export const getFields = (url: string) => {
  return request(url, {
    method: 'get'
  })
}

export const getTableData = (url: string) => {
  console.log(url, 99)
  return request(url, {
    method: 'get'
  })
}
