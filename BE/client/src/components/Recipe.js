import React from 'react'

export default function Recipe({recipe}) {
    return (
        <div>
            {recipe.name}
            {recipe.course}
            {recipe.technique}
        </div>
    )
}
