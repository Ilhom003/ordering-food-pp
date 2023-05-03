import React from 'react'
import { Check, Container, TastyTreatDescription, TastyTreatImg, TastyTreatRedTitle, TastyTreatServices, TastyTreatText, TastyTreatTitle, Img, ServicesTitle, ShippingService, Wrapper } from './style'
import banner from '../../../assets/Imgs/banner/banner2.jpg'

const TastyTreat = () => {
    return (
        <Container>
            <Wrapper>
                <TastyTreatImg>
                    <Img src={banner} />
                </TastyTreatImg>
                <TastyTreatText>
                    <TastyTreatTitle> Why <TastyTreatRedTitle>Tasty Treat?</TastyTreatRedTitle></TastyTreatTitle>
                    <TastyTreatDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, minus. Tempora reprehenderit a corporis velit, laboriosam vitae ullam, repellat illo sequi odio esse iste fugiat dolor, optio incidunt eligendi deleniti!</TastyTreatDescription>
                    <TastyTreatServices>
                        <ShippingService>
                            <Check />
                            <ServicesTitle>Fresh and tasty foods</ServicesTitle>
                        </ShippingService>
                        <TastyTreatDescription>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, voluptatibus.</TastyTreatDescription>
                    </TastyTreatServices>
                    <TastyTreatServices>
                        <ShippingService>
                            <Check />
                            <ServicesTitle>Quality support</ServicesTitle>
                        </ShippingService>
                        <TastyTreatDescription>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, voluptatibus.</TastyTreatDescription>
                    </TastyTreatServices>
                    <TastyTreatServices>
                        <ShippingService>
                            <Check />
                            <ServicesTitle>Order from any location</ServicesTitle>
                        </ShippingService>
                        <TastyTreatDescription>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, voluptatibus.</TastyTreatDescription>
                    </TastyTreatServices>
                </TastyTreatText>
            </Wrapper>
        </Container>
    )
}

export default TastyTreat