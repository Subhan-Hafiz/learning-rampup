import axios from "axios";

export const getApi = (url) => {
    return axios.get(url)
}

export const patchApi = (url, id, data) => {
    return axios.patch(`${url}/${id}`,data)
}

export const deleteApi = (url, id, data) => {
    return axios.delete(`${url}/${id}`)
}