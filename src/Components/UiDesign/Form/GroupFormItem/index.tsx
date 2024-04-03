import { Form } from "antd";
import { IPropsFormGroupItem, ObjItemForm } from "../TypeForm/typeForm.type";
import { OmitCustom } from "../../../../Helper";
import { WrapperLabel } from "./style";

export const FormItem = (props: ObjItemForm) => {
  const Component = props.component;
  const customLabel = () => {

    if(!props.required) {
      return props.label
    }

    return (
      <WrapperLabel>
        {props.label}
      </WrapperLabel>
    )
  }
 
   return (
     <Form.Item 
       {...OmitCustom(props, 'component', 'propsComponent')}
       key={props.name} 
       required={false}
       label={customLabel()}
       labelAlign="left"
     >
       <Component {...props.propsComponent} />
     </Form.Item>
   ) 
 }

const GroupFormItem = <T,>(props: IPropsFormGroupItem<T>) => {
  const { listFiled, layout="vertical" } = props;

  return (
    <Form 
      {...OmitCustom(props, 'listFiled')} 
      form={props.form}
      name={props.name} 
      layout={layout}
    >
      {
        listFiled.map(item => {
          return <FormItem {...item} />
        })
      }
    </Form>
  )
}

export default GroupFormItem;
