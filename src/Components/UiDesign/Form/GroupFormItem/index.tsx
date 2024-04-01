import { Form } from "antd";
import { IPropsFormGroupItem } from "../TypeForm/typeForm.type";

const GroupFormItem = <T,>(props: IPropsFormGroupItem<T>) => {

  const { listFiled  } = props;

  return (
    <>
      <Form>
        {
          listFiled.map(item => {
            const Component = item.component;

            return (
              <Form.Item name={item.name}>
                <Component />
              </Form.Item>
            )
          })
        }
      </Form>
    </>
  )
}

export default GroupFormItem;