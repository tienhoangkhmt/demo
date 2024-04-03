import { ThemeConfig } from "antd";
import { ComponentToken } from "antd/es/button/style";
import { AliasToken, ComponentTokenMap, MappingAlgorithm } from "antd/es/theme/interface";


export interface IButtonAntd extends ComponentToken {
  dashedBg: string
}

export interface ComponentTokenMaps extends ComponentTokenMap{
  Button: IButtonAntd
}

export type OverrideToken = {
  [key in keyof ComponentTokenMaps]: Partial<ComponentTokenMaps[key]> & Partial<AliasToken>;
};

type ComponentsConfig = {
  [key in keyof OverrideToken]?: OverrideToken[key] & {
      algorithm?: boolean | MappingAlgorithm | MappingAlgorithm[];
  };
};

export interface ThemeConfigAntd extends ThemeConfig {
  components: ComponentsConfig
}