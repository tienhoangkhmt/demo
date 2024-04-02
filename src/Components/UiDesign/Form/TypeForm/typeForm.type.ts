import { FormInstance, FormItemProps, FormProps } from "antd";
import { ComponentType } from "react";

export interface ObjItemForm extends FormItemProps {
  name: string,
  component: ComponentType,
  propsComponent?: object
}

export interface IPropsFormGroupItem<T> extends FormProps{
  listFiled: Array<ObjItemForm>,
  ni: T,
  form: FormInstance
}
