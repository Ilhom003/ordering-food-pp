import styled from "styled-components"


export const Container = styled.div`
width: 100%;
`
export const Wrapper = styled.div`
max-width: 1550px;
padding: 0 130px;
width: 100%;
margin: auto;

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
export const Foods = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
gap: 1.4rem;
padding: 60px 0;

@media (max-width: 992px){
    grid-template-columns: 1fr 1fr 1fr;
    
}
@media (max-width: 768px){
    grid-template-columns: 1fr 1fr;
    
}
@media (max-width: 410px){
    grid-template-columns: 1fr;

}
`
export const FoodWrapper = styled.div`
    background: #fde4e4;
    padding: 30px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: .4s;
    
    @media (max-width:1200px) {
        padding: 20px 12px;
    }
    @media (max-width: 768px){
        padding: 15px 20px;

    }
`
export const FoodContent = styled.div`
display: flex;
align-items: center;
gap: 1rem;

`
export const FoodImg = styled.img`
@media (max-width: 576px){
    width: 40px;
    height: 40px;
}
`
export const FoodTitle = styled.h6`
font-family:var(--secondary-font-family);
font-weight: 500;
font-size: 1rem;

@media (max-width: 576px){
    font-size: .8rem;
}
`