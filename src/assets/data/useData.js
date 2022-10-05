import { data } from "./data"

export const getData = () => data
export const getDataById = (id) => {
  return data.find(item => item.id === id)
}