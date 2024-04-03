import ReactLogo from '../../../assets/react.svg?react';
import ViteLog from '../../../assets/vite.svg?react';

type TPropsIcons = {
  name: string
}

const CustomIcons = (props: TPropsIcons) => {
  const { name } = props;

  switch (name) {
    case 'react': 
      return <ReactLogo />
    default:
      return <ViteLog />
  }
}

export default CustomIcons;