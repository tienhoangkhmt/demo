import ButtonAntd from './Components/UiDesign/ButtonAntd'
import { ConfigProvider, Button, message } from 'antd'
import ThemeConfigProvide from './Theme/theme.config'
import { Alert } from "antd";
import AlertMessage from './Utils/alert';
import { typeMessage } from './Types/common/common.type';
import TableAntd from './Components/UiDesign/TableAntd';
import GroupFormItem from './Components/UiDesign/Form/GroupFormItem';

type a = {
  namedddd: string
}

function App() {

  const success = () => {
    AlertMessage('hoisdhfoi', typeMessage.error)
  };

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
        <Alert message="sdf" />
          <TableAntd propsTable={{}} url='/api/v1/users' />
          <GroupFormItem<a> ni={{namedddd: 'sdfs'}} listFiled={[{name: 'NAME', component: Button}]} />
      </ConfigProvider>
  )
}

export default App
