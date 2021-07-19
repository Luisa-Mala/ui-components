import { IconStyle } from "./styled";

export const Icon = ({nameIcon, ...args}) => {
    return(
        <IconStyle
            {...args}
            >
            {nameIcon}
        </IconStyle>
    )
}

Icon.defaultProps = {
    nameIcon: 'person'
}