import React from 'react'
import { Container, ServiceCart, ServiceCartWrapper, ServiceDescription1, ServiceDescription2, ServiceImg, ServiceSubtitle, ServiceText, ServiceTitle, ServiceTitle2, ServiceWrapper, TitleSpan, Wrapper } from './style'
import img1 from '../../../assets/deliver.jpg'
import img2 from '../../../assets/dine_in.jpg'
import img3 from '../../../assets/pick_up.jpg'
const Service = () => {
    return (
        <Container>
            <Wrapper>
                <ServiceWrapper>
                    <ServiceText>
                        <ServiceSubtitle>What we serve</ServiceSubtitle>
                        <ServiceTitle>Just sit back at home</ServiceTitle>
                        <ServiceTitle>we will <TitleSpan>take care</TitleSpan> </ServiceTitle>
                        <ServiceDescription1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, officiis?</ServiceDescription1>
                        <ServiceDescription2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eius.</ServiceDescription2>
                    </ServiceText>
                    <ServiceCartWrapper>
                        <ServiceCart>
                            <ServiceImg src={ img1} />
                            <ServiceTitle2>Quick Delivery</ServiceTitle2>
                            <ServiceDescription1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.</ServiceDescription1>
                        </ServiceCart>
                        <ServiceCart>
                            <ServiceImg src={ img2} />
                            <ServiceTitle2>Super Dine In</ServiceTitle2>
                            <ServiceDescription1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.</ServiceDescription1>
                        </ServiceCart>
                        <ServiceCart>
                            <ServiceImg src={ img3} />
                            <ServiceTitle2>Easy Pick Up</ServiceTitle2>
                            <ServiceDescription1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.</ServiceDescription1>
                        </ServiceCart>
                    </ServiceCartWrapper>
                </ServiceWrapper>
            </Wrapper>
        </Container>
    )
}

export default Service