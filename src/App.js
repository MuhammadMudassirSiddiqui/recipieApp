import React,{useEffect,useState} from 'react';
import './App.css';
import Recipie from './Recipie';
import { update } from 'lodash';

export default function App() {
    const APP_ID = 'da78a1d1';
    const APP_KEY = '0f6324a692bf756e9b702feec3948780';

    const [recipes,setRecipes] = useState([])
    const [search,setSearch] = useState('')
    const [query,setQuery] = useState('chicken')



    useEffect(()=>{
        getRecipes()
    },[query])

    const getRecipes = async()=>{
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json()
        setRecipes(data.hits) 
        console.log(data.hits);
    }

    const updateSearch = (e)=>{
        setSearch(e.target.value)
    }
    const updateQuery = (e)=>{
        e.preventDefault()
        setQuery(search)
        setSearch('')
    }

    return (
        <div className='App' >
            <form onSubmit={updateQuery} className='search-form'>
                <input className='search-bar' type="text" value={search} onChange={updateSearch}/>
                <button className='search-btn' type="submit">Search</button>
            </form>
            <div className='recipes'>
                {recipes.map(recipe=>(
                        <Recipie 
                        key={recipe.recipe.calories}
                        title={recipe.recipe.label} 
                        calorie={recipe.recipe.calories} 
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients}
                          />
                ))}
            </div>
        </div>
    )
}
