import styled from "styled-components"
import {AiFillCar} from 'react-icons/ai'
import {BsShieldFillCheck} from 'react-icons/bs'
import {FaChevronRight} from 'react-icons/fa'
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

export const Container = styled.div`
width: 100%;
`
export const Wrapper = styled.div`
max-width: 1440px;
padding: 0 130px;
width: 100%;
margin: auto;
display: grid;
grid-template-columns: 1fr 1fr;

@media (max-width:1440px) {
    padding: 0 80px;
}
@media (max-width:1200px) {
    padding: 0 70px;
}
@media (max-width: 992px){
    padding: 0 60px;
}
@media (max-width: 768px){
    padding: 0 40px;
    grid-template-columns: 1fr;

}
@media (max-width: 576px){
    padding: 0 30px;
}
`
export const TestmonialText = styled.div`
padding-top: 70px;
`
export const TestmonialSubtitle = styled.h5`
margin-bottom: 1.5rem;
color: var(--red);
font-weight: 500;
font-size: 1.25rem;
@media (max-width: 768px){
    margin-bottom: 0.5rem;
    font-size:1rem;
}
`
export const TestmonialTitle = styled.h2`
margin-bottom: 1.5rem;
color: var(--blue);
@media (max-width: 768px){
    font-size:1.5rem;

}
`
export const TestmonialRedTitle = styled.span`
color: #df2020;
font-family: var(--secondary-font-family);
`
export const TestmonialDescription = styled.p`
font-size: 1rem;
line-height: 30px;
color: #777;
margin-bottom: 1rem;
`
export const TestmonialBtns = styled.div`
display: flex;
align-items: center;
gap: 3rem;
padding-top: 1rem;
`

export const TestmonialServices = styled.div`
display: flex;
align-items: center;
gap: 3rem;
margin-top: 3rem;
`

export const ShippingService = styled.div`
display: flex;
align-items: center;
gap:.5rem;
`
export const Car = styled(AiFillCar)``
export const Check = styled(BsShieldFillCheck)``
export const Right = styled(FaChevronRight)`
    vertical-align: middle;
`
export const ServicesTitle = styled.p`
color: #212245;
font-weight: 600;
font-size: .9rem;
@media (max-width: 576px){
    font-size: .7rem;
   
}
`
export const Span = styled.span`
display: flex;
align-items: center;
justify-content: center;
padding: 5px;
background: #df2020;
color: #fff;
border-radius: 50%;
font-weight: 500;
`


export const TestmonialImg = styled.div`
`
export const Img = styled.img`
width: 100%;
vertical-align: middle;
`

export const SliderWrapper = styled.div`
max-width: 590px;
width: 100%;

@media (max-width:1300px) {
    width: 550px;
    
}
@media (max-width:1200px) {
    width: 500px;
    
}
@media (max-width:1000px) {
    width: 450px;
    
}
@media (max-width:992px) {
    width: 400px;
    
}
@media (max-width:800px) {
    width: 320px;
    
}
@media (max-width: 768px){
    width:600px

}
@media (max-width: 660px){
    width:500px

}
@media (max-width: 600px){
    width:450px

}
@media (max-width: 450px){
    width:380px

}
@media (max-width: 576px){
    /* padding: 0 30px; */
}
`
export const CarouselContent = styled.div``
export const CarouselContentCart = styled.div`
display: flex;
align-items: center;
gap: 1rem;
`
export const CarouselDescription = styled.p`
color: #777;
line-height: 30px;
margin: 40px 0;
font-size: 1rem;
`
export const CarouselImg = styled.img`
width: 50px;
height: 50px;
`
export const CarouselTitle = styled.h6`
font-family: var( --secondary-font-family);
font-size: 1rem;
`