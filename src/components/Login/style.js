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
padding: 80px 0;
max-width: 1440px;
width: 100%; 
padding: 0 130px;
margin: auto;
   
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

export const LoginForm = styled.div`
width: 100%;
padding: 60px 0;
`
export const Row = styled.div`
display: flex;
flex-wrap: wrap;
`
export const FormWrapper = styled.div`
    text-align: center;
    margin: auto;
    width: 35%;
`
export const Form = styled.form`
    width: 60%;
    margin: auto;
    background: #fde4e4;
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 3rem;
`
export const FormInput = styled.div`
    margin-bottom: 30px;
`
export const Input = styled.input`
    width: 100%;
    background: transparent;
    padding: 7px 20px;
    border: none;
    border-bottom: 1px solid rgba(33,34,69,.2980392156862745);
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
`
export const Link = styled.p`
:hover{
    color: #0d6efd;
    cursor: pointer;
}
`