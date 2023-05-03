import React from 'react'
import { Car, Check, CheckoutService, Container, HeroBtns, HeroDescription, HeroImg, HeroRedTitle, HeroServices, HeroSubtitle, HeroText, HeroTitle, Img, Right, ServicesTitle, ShippingService, Span, Wrapper } from './style'
import Button from '../../Generics/Button'
import banner from '../../../assets/Imgs/banner/banner1.jpg'

const Hero = () => {
    return (
        <Container>
            <Wrapper>
                <HeroText>
                    <HeroSubtitle>Easy way to make an order</HeroSubtitle>
                    <HeroTitle><HeroRedTitle>Hungry?</HeroRedTitle> Just wait food at <HeroRedTitle>your door</HeroRedTitle></HeroTitle>
                    <HeroDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui magni delectus tenetur autem, sint veritatis!</HeroDescription>
                    <HeroBtns>
                        <Button  hover={'var(--blue)'} pt={'7px'} pb={'7px'} pr={'20px'} pl={'20px'} fs={'1rem'} fw={'600'}>Order Now <Right size={12} /> </Button>
                        <Button type={'outline'} pt={'7px'} pb={'7px'} pr={'20px'} pl={'20px'} fs={'1rem'} fw={'600'}>See all foods</Button>
                    </HeroBtns>
                    <HeroServices>
                        <ShippingService>
                            <Span>
                                <Car />
                            </Span>
                            <ServicesTitle>No shipping charge</ServicesTitle>
                        </ShippingService>
                        <ShippingService>
                            <Span>
                                <Check />
                            </Span>
                            <ServicesTitle>100% secure checkout</ServicesTitle>
                        </ShippingService>
                    </HeroServices>
                </HeroText>
                <HeroImg>
                    <Img src={banner} />
                </HeroImg>
            </Wrapper>
        </Container>
    )
}

export default Hero