import { TableProps } from "antd";


// R => Record Type
// T => Type
// P => Params

export interface IPropsTable {
  propsTable: TableProps,
  onFetch?: (data?: Array<object> | undefined) => Array<object>  | undefined,
  url: string,
  params?: object
}
