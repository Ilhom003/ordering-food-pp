import React, { useRef, useState } from 'react'
import { Container, Wrapper, Main, MainWrapper, MainTitle, Images, CarouselImg, MainImg, ExtraImg, SingleProductDate, Text, ProductTitle, ProductPrice, ProductPriceNumber, Category, CategorySpan } from './style'
// import { useNavigate } from 'react-router-dom'
import Footer from '../Footer'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import Button from '../Generics/Button'
import { add_to_card } from '../../store/ProductSlice'

const Product = () => {
  const param = useParams()
  const product_id = param.id
  const { products } = useSelector(state => state.products)
  const dispatch = useDispatch()
  const [singleProduct, setSingleProduct] = useState({})
  const [sliderData, setSliderData] = useState(null)
  useEffect(() => {
    const res = products.filter((product) => product.id === product_id)
    setSingleProduct(res[0])
  }, [products, product_id])

  const handleClick = (index) => {
    const slider = singleProduct?.images[index]
    setSliderData(slider)
  }
  console.log(singleProduct);
  return (
    <Container>
      <Wrapper>
        <MainWrapper>
          <Main>
            <MainTitle>
              Chicken Burger
            </MainTitle>
          </Main>
        </MainWrapper>
      </Wrapper>
      <SingleProductDate>
        <Images>
          <CarouselImg>
            {
              singleProduct?.images?.map((img, i) => (
                <ExtraImg key={img.id} onClick={() => handleClick(i)} alt={img?.title} src={img.img} width='100' height='70' />

              ))
            }
          </CarouselImg>
          <MainImg src={sliderData?.img || singleProduct?.img} width='500' height='300' />
        </Images>
        <Text>
          <ProductTitle>{singleProduct?.title}</ProductTitle>
          <ProductPrice>Price: <ProductPriceNumber> ${singleProduct?.price}</ProductPriceNumber></ProductPrice>
          <Category>Category: <CategorySpan>{singleProduct?.category}</CategorySpan> </Category>
          <div>
            <Button onClick={()=>dispatch(add_to_card())}>Add to Cart</Button>
          </div>
        </Text>
      </SingleProductDate>
      <Footer />
    </Container>
  )
}

export default Product