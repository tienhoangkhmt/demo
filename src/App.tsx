import ButtonAntd from './Components/UiDesign/ButtonAntd'
import { ConfigProvider, Button } from 'antd'
import ThemeConfigProvide from './Theme/theme.config'

function App() {

  return (
    <div>
      <ConfigProvider theme={ThemeConfigProvide}>
    
        <ButtonAntd titleBtn='sdf' >sdfsdfsd211</ButtonAntd>
        <Button type='primary'>sdfsd</Button>
       
      </ConfigProvider>
    </div>
  )
}

export default App
