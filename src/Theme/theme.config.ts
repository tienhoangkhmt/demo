import { ThemeConfigAntd } from "../Types/theme/theme.type";

const ThemeConfigProvide: ThemeConfigAntd = {
    hashed: false,
    components: {
        Button: {
          colorPrimary: '#0F6AB3',
          colorPrimaryActive:'#0F6AB3',
          colorPrimaryHover: '#0F6AB3',
          // colorPrimaryBorder: 'none',
          fontSize: 16,
          algorithm: false,
          primaryColor: '#FFFFFF',
          borderRadius: 4,
          // defaultActiveBg: '#0F6AB3',
          dangerColor: '#DCEEFE',
          primaryShadow: '#0F6AB3',
          defaultColor: '#0F6AB3',
          defaultBorderColor: '#0F6AB3',
          defaultBg: '#ffff',
          dashedBg: '#DCEEFE',
          fontWeight: 600
          // dangerShadow: '#DCEEFE'
         
        },
        Typography: {
          titleMarginBottom: 0,
          titleMarginTop: 0
        }
    },
    token: {
        fontSize: 16,
        margin: 0,
        marginXS: 0,
    },
}

export default ThemeConfigProvide