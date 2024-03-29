import { CreateAxiosDefaults, InternalAxiosRequestConfig } from "axios";

export interface ParamsCreateAxios<T> extends CreateAxiosDefaults<T> {
    body?: T
}

export interface ParamsRequest extends InternalAxiosRequestConfig {}
