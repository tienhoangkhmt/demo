import ButtonAntd from './Components/UiDesign/ButtonAntd'
import { ConfigProvider, Button, message, Typography, Form } from 'antd'
import ThemeConfigProvide from './Theme/theme.config'
import { Alert } from "antd";
import AlertMessage from './Utils/alert';
import { typeMessage } from './Types/common/common.type';
import TableAntd from './Components/UiDesign/TableAntd';
import GroupFormItem from './Components/UiDesign/Form/GroupFormItem';
import InputAntd from './Components/UiDesign/Form/InputAntd';
import { validateOption2 } from './Utils/validate';
import { useDispatch, useSelector } from 'react-redux';
import { postLogin } from './Features/auth/redux/auth.slice';
import { useEffect } from 'react';

type a = {
  namedddd: string
}

function App() {
  const [form] = Form.useForm();
  const success = () => {
    AlertMessage('hoisdhfoi', typeMessage.error)
  };

  const store = useSelector(store => store);
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(postLogin())
  }, [dispatch])

  console.log("store", store);
  

  return (
      <ConfigProvider theme={ThemeConfigProvide}>
        {/* {contextHolder} */}
        <ButtonAntd  onClick={success} titleBtn='sdf' >sdfsdfsd211</ButtonAntd>
        <Button type='primary'>sdfsd</Button>
        <Button type="primary" 
          onClick={() => { 
          message.info('Message Content!'); 
          }} 
        > 
        Click me to see Message 
        </Button> 
        <Typography.Paragraph >sdfsd</Typography.Paragraph>
        <Alert message="sdf" />
          <TableAntd propsTable={{}} url='/api/v1/users' />
          <GroupFormItem<a> 
            ni={{namedddd: 'sdfs'}} 
            listFiled={[
            {
              name: 'NAME', 
              component: InputAntd, 
              label: "sdf", 
              required: true, 
              // rules: [validate(form)]
              rules: [{
                validator: validateOption2
              }]
            }]}
            form={form}
          />
      </ConfigProvider>
  )
}

export default App
