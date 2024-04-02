import { Typography } from "antd"
import { LinkProps } from "antd/es/typography/Link"
import { ParagraphProps } from "antd/es/typography/Paragraph"
import { TitleProps } from "antd/es/typography/Title"
import { WrapperParagraph } from "./typography.styled"

export const ParagraphAntd:React.FC<ParagraphProps> = (props: ParagraphProps) => {

    return <WrapperParagraph {...props} className={`${props.className} D`} />
}

export const LinkAntd = (props: LinkProps) => {

    return <Typography.Link {...props}></Typography.Link>
}

export const TitleAntd = (props: TitleProps) => {
    const { level = 3, title = '' }  = props;

    return <Typography.Title {...props} level={level}>{title}</Typography.Title>
}
