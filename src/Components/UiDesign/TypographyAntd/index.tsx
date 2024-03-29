import { Typography } from "antd"
import { LinkProps } from "antd/es/typography/Link"
import { ParagraphProps } from "antd/es/typography/Paragraph"
import { TitleProps } from "antd/es/typography/Title"


export const ParagraphAntd:React.FC<ParagraphProps> = (props: ParagraphProps) => {

    return <Typography.Paragraph {...props}></Typography.Paragraph>
}

export const LinkAntd = (props: LinkProps) => {

    return <Typography.Link {...props}></Typography.Link>
}

export const TitleAntd = (props: TitleProps) => {
    const { level = 3, title = '' }  = props;

    return <Typography.Title {...props} level={level}>{title}</Typography.Title>
}
