import { TableProps } from "antd";

export interface IPropsTable {
  propsTable: TableProps,
  onFetch?: (data?: Array<object> | undefined) => Array<object>  | undefined,
  url: string,
  params?: object,
  bordered?: boolean
}

export type TReducerFn = {
  isLoading?: boolean,
  dataSource?: Array<object> | undefined,
  params?: object
}

export type AReducerParam = {
  type: string,
  payload: TReducerFn
}

export type ArgumentsFn = {
  page?: number,
  pageSize?: number
}
