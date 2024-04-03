import { Badge, BadgeProps } from "antd";
import CustomIcons from "../../CustomUi/Icons";
import { OmitCustom } from "../../../Helper";

interface IPropsBadge extends BadgeProps {
  name: string
}

const BadgeAntd = (props: IPropsBadge) => {

  return (
    <Badge {...OmitCustom(props, 'name')}>
      <CustomIcons name={props.name} />
    </Badge>
  )
}

export default BadgeAntd;