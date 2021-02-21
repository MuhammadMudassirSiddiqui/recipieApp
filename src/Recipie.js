import React from 'react'
import style from './Recipe.module.css'

 const Recipie=({title,calorie,image,ingredients}) => {
    return (
       <div className={style.recipe}>
            <h1>{title}</h1>
            <ul>
                {ingredients.map(ingredient=>(
                   <li>{ingredient.text}</li>
                ))}
            </ul>
            <p>{calorie}</p>
            <img className={style.img} src={image} alt=""/>
        </div>
    )
}
export default Recipie
