import { ButtonProps } from 'antd/es/button/button';

export type CustomBaseButtonProps = {
    icon?: string | null | undefined,
    titleBtn?: string | null | undefined
}

export type typeButton = CustomBaseButtonProps & ButtonProps;
