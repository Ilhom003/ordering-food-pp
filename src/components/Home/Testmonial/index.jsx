import React, { Component } from 'react'
import Slider from "react-slick";
import { Container, TestmonialDescription, TestmonialImg, TestmonialRedTitle, TestmonialSubtitle, TestmonialText, TestmonialTitle, Img, Wrapper, SliderWrapper, CarouselContent, CarouselContentCart, CarouselImg, CarouselTitle, CarouselDescription } from './style'
import banner from '../../../assets/Imgs/banner/banner3.jpg'
import { Carousel } from 'antd';
import User1 from '../../../assets/Imgs/users/user1.jpg'
import User2 from '../../../assets/Imgs/users/user2.jpg'
import User3 from '../../../assets/Imgs/users/user3.jpg'
import User4 from '../../../assets/Imgs/users/user4.jpg'
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

const Testmonial = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    return (
        <Container>
            <Wrapper>
                <TestmonialText>
                    <TestmonialSubtitle>Testmonial</TestmonialSubtitle>
                    <TestmonialTitle>What our <TestmonialRedTitle>customers</TestmonialRedTitle> are saying</TestmonialTitle>
                    <TestmonialDescription>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quasi qui minus quos sit perspiciatis inventore quis provident placeat fugiat!</TestmonialDescription>
                    <SliderWrapper>
                        <Slider {...settings} >
                            <CarouselContent>
                                <CarouselDescription>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis atque, quam minus totam maiores laborum! Impedit consectetur illum aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus quis dolorem quas!"</CarouselDescription>
                                <CarouselContentCart>
                                    <CarouselImg src={User1} />
                                    <CarouselTitle>Jhon Doe</CarouselTitle>
                                </CarouselContentCart>
                            </CarouselContent>
                            <CarouselContent>
                                <CarouselDescription>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis atque, quam minus totam maiores laborum! Impedit consectetur illum aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus quis dolorem quas!"</CarouselDescription>
                                <CarouselContentCart>
                                    <CarouselImg src={User1} />
                                    <CarouselTitle>Jhon Doe</CarouselTitle>
                                </CarouselContentCart>
                            </CarouselContent>
                            <CarouselContent>
                                <CarouselDescription>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis atque, quam minus totam maiores laborum! Impedit consectetur illum aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus quis dolorem quas!"</CarouselDescription>
                                <CarouselContentCart>
                                    <CarouselImg src={User1} />
                                    <CarouselTitle>Jhon Doe</CarouselTitle>
                                </CarouselContentCart>
                            </CarouselContent>
                            <CarouselContent>
                                <CarouselDescription>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis atque, quam minus totam maiores laborum! Impedit consectetur illum aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus quis dolorem quas!"</CarouselDescription>
                                <CarouselContentCart>
                                    <CarouselImg src={User1} />
                                    <CarouselTitle>Jhon Doe</CarouselTitle>
                                </CarouselContentCart>
                            </CarouselContent>
                        </Slider>
                    </SliderWrapper>
                </TestmonialText>
                <TestmonialImg>
                    <Img src={banner} />
                </TestmonialImg>
            </Wrapper>
        </Container>
    )
}

export default Testmonial