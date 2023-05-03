import React from 'react'
import { Container, FoodImg, PopularFoodsCards, PopularFoodsTitle, PopularFoodsWrapper, Wrapper } from './style'
import { Tabs } from 'antd';
import { useSelector } from 'react-redux';
import Card from '../../Generics/Card'
import burger from '../../../assets/Imgs/food-brands/brand6.jpg'
import pizza from '../../../assets/Imgs/food-brands/brand7.jpg'
import bread from '../../../assets/Imgs/breads/bread4.jpg'

const PopularFoods = () => {
    const { products } = useSelector(state => state.products)
    // console.log(products);

    const onChange = (key) => {
        console.log(key);
    };
    const items = [
        {
            key: '1',
            label: `All`,
            children:
                <PopularFoodsCards>
                    {
                        products?.map(val => (
                            <Card key={val.id} id={val.id} title={val.title} img={val.images[0].img} price={val.price} />
                        ))
                    }
                </PopularFoodsCards>

        },
        {
            key: '2',
            label: <div style={{display:'flex',alignItems:'center',gap:'.5rem'}}><FoodImg src={burger}/> Burger</div> ,
            children:
                <PopularFoodsCards>
                    {
                        products.filter(val => val.category === 'Burger').map(val => (
                            <Card key={val.id} id={val.id} title={val.title} img={val.images[0].img} price={val.price} />
                        ))
                    }
                </PopularFoodsCards>
        },
        {
            key: '3',
            label:<div style={{display:'flex',alignItems:'center',gap:'.5rem'}}><FoodImg src={pizza}/> Pizza</div>,
            children: <PopularFoodsCards>
                {
                    products.filter(val => val.category === 'Pizza').map(val => (
                        <Card key={val.id} id={val.id} title={val.title} img={val.images[0].img} price={val.price} />
                    ))
                }
            </PopularFoodsCards>
        },
        {
            key: '4',
            label: <div style={{display:'flex',alignItems:'center',gap:'.5rem'}}><FoodImg src={bread}/> Bread</div>,
            children: <PopularFoodsCards>
                {
                    products.filter(val => val.category === 'Bread').map(val => (
                        <Card key={val.id} id={val.id} title={val.title} img={val.images[0].img} price={val.price} />
                    ))
                }
            </PopularFoodsCards>
        },
    ];
    return (
        <Container>
            <Wrapper>
                <PopularFoodsWrapper>
                    <PopularFoodsTitle>Popular Foods</PopularFoodsTitle>
                    {/* <PopularFoodsCards> */}
                    <Tabs  defaultActiveKey="1" items={items} onChange={onChange} />
                    {/* </PopularFoodsCards> */}
                </PopularFoodsWrapper>
            </Wrapper>
        </Container>
    )
}

export default PopularFoods