import React from 'react'
import { Container, FoodContent, FoodImg, FoodTitle, FoodWrapper, Foods, Wrapper } from './style'
import food1 from '../../../assets/Imgs/food-brands/brand1.jpg'
import food2 from '../../../assets/Imgs/food-brands/brand2.jpg'
import food3 from '../../../assets/Imgs/food-brands/brand3.jpg'
import food4 from '../../../assets/Imgs/food-brands/brand4.jpg'

const FoodTypes = () => {
    return (
        <Container>
            <Wrapper>
                <Foods>

                    <FoodWrapper>
                        <FoodContent>
                            <FoodImg src={food1} />
                            <FoodTitle>Fastfood</FoodTitle>
                        </FoodContent>
                    </FoodWrapper>
                    <FoodWrapper>
                        <FoodContent>
                            <FoodImg src={food2} />
                            <FoodTitle>Pizza</FoodTitle>
                        </FoodContent>
                    </FoodWrapper>
                    <FoodWrapper>
                        <FoodContent>
                            <FoodImg src={food3} />
                            <FoodTitle>Asian Food</FoodTitle>
                        </FoodContent>
                    </FoodWrapper>
                    <FoodWrapper>
                        <FoodContent>
                            <FoodImg src={food4} />
                            <FoodTitle>Row Meat</FoodTitle>
                        </FoodContent>
                    </FoodWrapper>
                </Foods>
            </Wrapper>
        </Container>
    )
}

export default FoodTypes