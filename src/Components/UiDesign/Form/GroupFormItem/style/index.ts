import styled from "styled-components";
import { ParagraphAntd } from "../../../TypographyAntd";

export const WrapperLabel = styled(ParagraphAntd)`
  &::after {
    display: inline-block;
    margin-inline-start: 4px;
    color: #ff4d4f;
    font-size: 20px;
    font-family: SimSun, sans-serif;
    line-height: 1;
    content: "*";
  }
`;