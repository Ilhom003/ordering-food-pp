import styled from "styled-components";

export const Container = styled.div`
max-width: 306px;
width: 100%;
/* flex: 0 0 auto;
width: 100%; */
/* @media (max-width: 992px){
    flex: 0 0 auto;
    width: 25%;
}

@media (max-width: 768px){
    flex: 0 0 auto;
    width: 33.33333333%;
}
@media (max-width: 576px){
    flex: 0 0 auto;
    width: 50%;
} */
`
export const Wrapper = styled.div`
    border: 1px solid #fde4e4;
    text-align: center;
    padding: 30px;
    cursor: pointer;
`
export const ProductImgWrapper = styled.div`
    margin-bottom: 20px;
    transition-duration: 0.4s;
    transition-timing-function: ease;
    transition-delay: 0s;
    transition-property: all;
    :hover{
    transform: scale(1.2);
   
}
`
export const ProductImg = styled.img`
    width: 50%;
    vertical-align: middle;
  
    
`

export const ProductContent = styled.div``
export const ProductContentTitle = styled.h5`
margin-bottom: 30px;
font-weight: 500;
`
export const ProductContentBottom = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
export const ProductPrice = styled.span`
    font-weight: 600;
    font-size: 1.2rem;
    color: #df2020;
`