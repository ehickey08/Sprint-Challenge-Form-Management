import React from 'react'
import styled from 'styled-components'

export default function Recipe({recipe}) {
    return (
        <RecipeDiv>
            <h3>{recipe.name}</h3>
            <h4>Course: {recipe.course}</h4>
            <h4>Technique: {recipe.technique}</h4>
            <h4>Ingredients:</h4>
            <ul>
                {recipe.ingredients.map(ingred => <li key={ingred}>{ingred}</li>)}
            </ul>
        </RecipeDiv>
    )
}

const RecipeDiv = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    height: 360px;

    h3{
        font-size: 20px;
        color: inherit;
        text-decoration: underline;
    }

    h4{
        font-size: 16px;
        color: inherit;
    }

    ul{
        list-style-type: square;
        list-style-position: inside;
        margin: 0;
        padding: 0;
        background: #cce5ff;
        width: fit-content;
        margin: 0 auto;
        border-radius: 15px;
    }

    li{
        margin: 5px;
        color: black;
    }

`