import React from 'react'
import {Carousel} from 'antd'
import Recipe from './Recipe'
import styled from 'styled-components'

export default function CarouselDiv({data}) {
    return (
        <CarouselContainer autoplay effect="fade">
            {data.map(recipe => <Recipe recipe={recipe} key={recipe.name} />)}
        </CarouselContainer>
    )
}

const CarouselContainer = styled(Carousel)`
    width: 600px;
    margin: 0 auto;
    background-color: #4dd0e1;
    padding: 50px;
    border-radius: 15px;
`