import { MethodApi } from './../Constants/api.constants';
import axios, { AxiosError, AxiosResponse } from "axios";
import { ParamsCreateAxios, ParamsRequest } from "../Types/api/api.type";
import AlertMessage from '../Utils/alert';
import { typeMessage } from '../Types/common/common.type';

export const requestInterceptor = (request: ParamsRequest):ParamsRequest => {

    const token = localStorage.getItem("token");
    request.headers['Abp.Tenantid'] = 4;

    if(token) {
        request.headers.Authorization = `Bearer ${token}`
    }

    return request;
}

export const responseInterceptor = (response: AxiosResponse) => {
    
    return  response;
}

export const errorInterceptor = (error: AxiosError): Promise<AxiosError> => {

    if(error?.response?.status === 401) {
        localStorage.getItem('token')
    }

    return Promise.reject(error)
}

export const callApi = <T>({ url, method = MethodApi.GET, params, body, headers }: ParamsCreateAxios<T>) => {

    const { VITE_REACT_URL } = import.meta.env

    const api = axios.create({
        baseURL: VITE_REACT_URL,
        headers: {
            "Content-Type": 'application/json',
            ...headers
        }
    })

    api.interceptors.request.use(requestInterceptor);
    api.interceptors.response.use(responseInterceptor, errorInterceptor);

    return api.request({url, method, params, data: body})
    .then(response => response)
    .catch(error => {
        if(error?.response?.status === 500) {
            AlertMessage('error', typeMessage.error)
        }
        
        throw new Error(error)
    })
}
