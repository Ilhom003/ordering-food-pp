import React from 'react'
import { Container, ProductContent, ProductContentBottom, ProductContentTitle, ProductImg, ProductImgWrapper, ProductPrice, Wrapper } from './style'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'

const Card = ({ img, title, price,id}) => {
  const navigate = useNavigate()
  return (
    <Container>
      <Wrapper>
        <ProductImgWrapper>
          <ProductImg src={img} />
        </ProductImgWrapper>
        <ProductContent>
          <ProductContentTitle onClick={()=>navigate(`/foods/${id}`)}>{title}</ProductContentTitle>
          <ProductContentBottom>
            <ProductPrice>${price}</ProductPrice>
            <Button>Add to Cart</Button>
          </ProductContentBottom>
        </ProductContent>
      </Wrapper>
    </Container>
  )
}

export default Card