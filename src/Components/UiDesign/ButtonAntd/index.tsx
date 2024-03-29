import { Button } from 'antd';
import { typeButton } from './type/button.type';
import { LoadingOutlined  } from '@ant-design/icons';
import { ParagraphAntd } from '../TypographyAntd';
import styled from 'styled-components';
import ThemeConfigProvide from '../../../Theme/theme.config';


const WrapperButtonAntd = styled(Button)`
    .wrapper-content {
        display: flex;
        align-items: center;
        .title-content {
            color: ${ThemeConfigProvide.components?.Button?.primaryColor}
        }
    }
`;

const ButtonAntd:React.FC<typeButton> = (props: typeButton): React.JSX.Element => {
    const { children, titleBtn, loading = false, type= "primary" } =  props;

    return (
        <WrapperButtonAntd {...props} loading={loading} type={type}>
           <ParagraphAntd className='wrapper-content'>
                <ParagraphAntd className='title-content'>{children || titleBtn}</ParagraphAntd>
                {/* set custom icon */}
                <LoadingOutlined style={{ fontSize: 14 }}  />
            </ParagraphAntd>
        </WrapperButtonAntd>
    )
}

export default ButtonAntd;