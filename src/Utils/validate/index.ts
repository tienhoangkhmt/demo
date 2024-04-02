import { FormInstance, RuleObject } from "antd/es/form"
import { StoreValue } from "antd/es/form/interface";

// xử lý validate cách 1
// dùng khi trường rules là mảng rỗng
export const validate = (form: FormInstance): RuleObject => {
  console.log(form);
  
  return {
    validator: (_, value) => {
      if(value === '12') return Promise.resolve()
      return Promise.reject(new Error('Hello'))
    }
  }
}

// xử lý validate cách 2
// dùng khi trường rules có dạng như sau
// [
//   {
//     validate: (rule, value, callback)
//   }
// ]
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Validator = (rule: RuleObject, value: StoreValue, callback: (error?: string) => void) => Promise<void | any> | void;

export const validateOption2: Validator = (rule, value, callback) => {

  if (value === '12') {
    callback('dsfdsf')
  } else {
    callback()
  }
}

