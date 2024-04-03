import { Button } from 'antd';
import { typeButton } from './type/button.type';
import { LoadingOutlined  } from '@ant-design/icons';
// import { ParagraphAntd } from '../TypographyAntd';
// import styled from 'styled-components';
// import ThemeConfigProvide from '../../../Theme/theme.config';
import { OmitCustom } from '../../../Helper';

// const WrapperButtonAntd = styled(Button)`
//     .wrapper-content {
//         display: flex;
//         align-items: center;
//         .title-content {
//             color: ${ThemeConfigProvide.components?.Button?.primaryColor}
//         }
//     }
// `;

const ButtonAntd:React.FC<typeButton> = (props: typeButton): React.JSX.Element => {
    const { children, titleBtn, loading = false, type= "primary" } =  props;

    return (
        <Button {...OmitCustom(props, 'titleBtn')} loading={loading} type={type}>
           {children || titleBtn} <LoadingOutlined style={{ fontSize: 14 }} />
        </Button>
    )
}

export default ButtonAntd;