import { Select, SelectProps } from "antd";

const SelectAntd = (props: SelectProps) => {
  const defaultFieldName: SelectProps['fieldNames'] = {
    label: 'name',
    value: 'id'
  }

  const { 
    fieldNames = defaultFieldName 
  } = props;

  return (
    <Select {...props} fieldNames={fieldNames} />
  )
}

export default SelectAntd;
