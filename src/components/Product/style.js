import styled from "styled-components";
import banner from '../../assets/Imgs/foods/food17.jpg'

export const Container = styled.div`
    width: 100%;
`
export const Wrapper = styled.div`
     background: linear-gradient(rgba(33,34,69,.6980392156862745),rgba(33,34,69,.6980392156862745)),url(${banner});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    padding: 80px 0;
    `
export const MainWrapper = styled.div`
max-width: 1550px;
width: 100%; 
padding: 0 130px;
margin: auto;
display: flex;
`
export const Main = styled.div`
    width: 100%;
    
@media (min-width: 768px){
    max-width: 720px;
}
@media (min-width: 576px){
    max-width: 540px;
}
    
`
export const MainTitle = styled.h2``

export const Images = styled.div`
display: flex;
flex: 1;

@media(max-width: 768px){
        display: flex;
        flex-direction: column;
    }
`
export const CarouselImg = styled.div`
 display: flex;
 flex-direction: column;
 gap:.5rem;
 
 @media(max-width: 768px){
        display: flex !important;
        flex-direction: row;
        justify-content: center;
        gap: 1rem;
    }
    @media(max-width: 576px){
        display: flex;
        gap: 1.8rem;
        
    
}
 `
export const MainImg = styled.img`
max-width: 416px;
height: 416px;
margin: auto;

@media (max-width:1200px) {
    max-width: 295px;
    height: 295px;
}
@media (max-width:992px) {
    max-width: 216px;
    height: 216px;
}
@media(max-width: 768px){
    max-width: 516px;
    height: 516px;
    
}
@media(max-width: 576px){
    width: 100%;
    height: auto;
    
}
`
export const ExtraImg = styled.img`
width: 98px;
height: 98px;
@media (max-width:1200px) {
    width: 67px;
    height: 67px;
}
@media (max-width:992px) {
    width: 48px;
    height: 48px;
}
@media(max-width: 768px){
    width: 150px;
    height: 150px;
    
}
@media(max-width: 576px){
    /* max-width: 91px; */
    width: 100%;
    height: auto;
    
}
`
export const SingleProductDate = styled.div`
max-width: 1550px;
width: 100%; 
padding: 60px 130px;
margin: auto;
display: flex;

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
        display: flex;
        flex-direction: column;
    }
    @media (max-width: 576px){
        padding: 0 30px;
    }
`
export const Text = styled.div`
/* width: 50%; */
display: flex;
flex-direction: column;
flex: 1;
padding-left: 50px;
`
export const ProductTitle = styled.h2`
    font-size: 2.1rem;
    font-weight: 600;
    color: #212245;
    margin-bottom: 1rem;
`
export const ProductPrice = styled.p`
    font-weight: 600;
    font-size: 1.2rem;
    color: #df2020;
`
export const ProductPriceNumber = styled.span`
    font-weight: 600;
    font-size: 2rem;
    color: #df2020;
    vertical-align: middle;
`
export const Category = styled.p`
    font-size: 1.1rem;
    font-weight: 600;
    color: #212245;
    display: flex;
    align-items: center;
    grid-column-gap: 1rem;
    -webkit-column-gap: 1rem;
    column-gap: 1rem;
    margin-top: 10px;
    margin-bottom: 3rem;
`
export const CategorySpan = styled.span`
    padding: 5px 10px;
    background: #fde4e4;
    color: #212245;
    border-radius: 5px;
`