import React, { forwardRef } from 'react'
import { Container } from './style'

const Button = forwardRef(({
    style,
    children,
    type,
    icon,
    onClick,
    mt,
    mr,
    mb,
    ml,
    pt,
    pr,
    pb,
    pl,
    fs,
    fw,
    hover
},ref)=> {
    return (
        <Container type={type}
        ref={ref}
            mr={mr}
            ml={ml}
            mb={mb}
            mt={mt}
            pr={pr}
            pl={pl}
            pb={pb}
            pt={pt}
            fs={fs}
            fw={fw}
            hover={hover}
            style={style}
            onClick={onClick}>{children}</Container>
    )
}
)

export default Button