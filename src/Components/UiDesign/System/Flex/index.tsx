import { Flex, FlexProps } from "antd";

interface IPropsFlexAntd extends FlexProps {
}

const FlexAntd = (props: IPropsFlexAntd) => {
  const { 
    gap = 'middle',
    wrap='wrap',
    justify= 'space-between',
    vertical = true
  } = props;

  return (
    <Flex 
      {...props} 
      gap={gap} 
      wrap={wrap} 
      justify={justify}
      vertical={vertical}
    >
      {props.children}
    </Flex>
  )
}

export default FlexAntd;
