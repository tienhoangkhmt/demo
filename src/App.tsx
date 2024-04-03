import ButtonAntd from './Components/UiDesign/ButtonAntd'
import { ConfigProvider, message, Typography, Form } from 'antd'
import ThemeConfigProvide from './Theme/theme.config'
import { Alert } from "antd";
import AlertMessage from './Utils/alert';
import { typeMessage } from './Types/common/common.type';
import TableAntd from './Components/UiDesign/TableAntd';
import GroupFormItem from './Components/UiDesign/Form/GroupFormItem';
import InputAntd from './Components/UiDesign/Form/InputAntd';
import { validateOption2 } from './Utils/validate';
import { postLogin } from './Features/auth/redux/auth.slice';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store';
import CustomIcons from './Components/CustomUi/Icons';
// import { LoadingOutlined } from '@ant-design/icons';

type a = {
  namedddd: string
}

function App() {
  const [form] = Form.useForm();
  const success = () => {
    AlertMessage('hoisdhfoi', typeMessage.error)
  };

  const store = useAppSelector(store => store.auth);
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(postLogin())
  }, [dispatch])

  console.log("store", store);

  return (
      <ConfigProvider theme={ThemeConfigProvide}>
        {/* {contextHolder} */}
        <ButtonAntd  onClick={success} titleBtn='sdf' >sdfsdfsd211</ButtonAntd>
        <ButtonAntd type='dashed'>sdfsd</ButtonAntd>
        <ButtonAntd type="default" 
          onClick={() => { 
          message.info('Message Content!'); 
          }} 
        > 
        Click me to see Message 
        </ButtonAntd> 
        <ButtonAntd type="default" 
          onClick={() => { 
          message.info('Message Content!'); 
          }} 
          disabled
        > 
        Click me to see Message 
        </ButtonAntd> 
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
          <CustomIcons name='' />
      </ConfigProvider>
  )
}

export default App
