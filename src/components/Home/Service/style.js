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
export const ServiceWrapper = styled.div`

`
export const ServiceText = styled.div`
text-align: center;
`
export const ServiceSubtitle = styled.h5`
color: var(--red);
margin-bottom: 1.5rem;
font-size: 1.25rem;
font-weight: 500;
`
export const ServiceTitle = styled.h2`
color: var(--blue);
`
export const TitleSpan = styled.span`
color: var(--red);
`
export const ServiceDescription1 =styled.p`
    color: #777;
    margin-top: 1.5rem;
    margin-bottom: .25rem;
`
export const ServiceDescription2 =styled.p`
    color: #777;
    margin-bottom: 1rem;
`
export const ServiceCart = styled.div`
text-align: center;
padding-top: 1rem!important;
padding-bottom: 1rem!important;
padding-right: 3rem!important;
padding-left: 3rem!important;
`
export const ServiceCartWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 3rem;

    @media (max-width: 992px){
    grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 768px){
    grid-template-columns: 1fr;
    
}
/* @media (max-width: 410px){
    grid-template-columns: 1fr;

} */
`
export const ServiceTitle2 = styled.h5`
font-weight: 700;
font-size: 1.25rem;
`
export const ServiceImg = styled.img`
width: 80px;
height: 66px;
`