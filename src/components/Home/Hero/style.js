import styled from "styled-components"
import {AiFillCar} from 'react-icons/ai'
import {BsShieldFillCheck} from 'react-icons/bs'
import {FaChevronRight} from 'react-icons/fa'
export const Container = styled.div`
width: 100%;
`
export const Wrapper = styled.div`
max-width: 1550px;
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
export const HeroText = styled.div`
padding-top: 70px;
`
export const HeroSubtitle = styled.h5`
margin-bottom: 1rem;
font-weight: 500;
font-size: 1.25rem;
@media (max-width: 768px){
    margin-bottom: 0.5rem;
    font-size:1rem;
}
`
export const HeroTitle = styled.h1`
margin-bottom: 1.5rem;
max-width: 400px;

@media (max-width: 768px){
    font-size:1.5rem;

}
`
export const HeroRedTitle = styled.span`
color: #df2020;
font-family: var(--secondary-font-family);
`
export const HeroDescription = styled.p`
font-size: 1rem;
line-height: 30px;
color: #777;
margin-bottom: 1rem;
`
export const HeroBtns = styled.div`
display: flex;
align-items: center;
gap: 3rem;
padding-top: 1rem;
`

export const HeroServices = styled.div`
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
font-weight: 500!important;
`


export const HeroImg = styled.div`
`
export const Img = styled.img`
width: 100%!important;
vertical-align: middle;
`
