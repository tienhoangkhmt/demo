import { ThemeConfig } from "antd";

const ThemeConfigProvide: ThemeConfig = {
    hashed: false,
    components: {
        Button: {
            colorPrimary: '#7a1111',
            colorPrimaryActive:'#7a1111',
            colorPrimaryHover: '#7a1111',
            colorPrimaryBorder: 'none',
            fontSize: 20,
            algorithm: false,
            primaryColor: '#47fa00'
          },
          Typography: {
            titleMarginBottom: 0,
            titleMarginTop: 0
          }
    },
    token: {
        fontSize: 20,
        margin: 0,
        marginXS: 0
    },
}

export default ThemeConfigProvide