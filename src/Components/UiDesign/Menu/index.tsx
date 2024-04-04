import { Menu } from "antd";
import { MenuItem } from "./menu.type";

export function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  }
}

const MenuAntd = () => {

  return <Menu></Menu>
}

export default MenuAntd;
