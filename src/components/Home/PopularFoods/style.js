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
export const PopularFoodsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const PopularFoodsTitle = styled.h2`
color: var(--blue);
`
export const PopularFoodsCards = styled.div`
max-width: 1550px;
width: 100%;
margin: auto;
display: grid;
grid-template-columns: auto auto auto auto;
gap: 20px;

@media (max-width: 992px){
    grid-template-columns: auto auto auto;
    
}
@media (max-width: 768px){
    grid-template-columns: auto auto;
    
}
@media (max-width: 480px){
    
    grid-template-columns: auto;
}
`

export const FoodImg = styled.img`
width: 20px;
height: 20px;
color: red;
`