import { FormItemProps, FormProps } from "antd";
import { ComponentType } from "react";

export interface objItemForm extends FormItemProps {
  name: string,
  component: ComponentType,
  propsComponent?: object
}

export interface IPropsFormGroupItem<T> extends FormProps{
  listFiled: Array<objItemForm>,
  ni: T,
}
