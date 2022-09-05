import React,{ useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from '../layout/layout'
import { Link } from 'react-router-dom'

const SearchPage = () => {
    const [searchRecipe, setsearchRecipe] = useState([])
    const params = useParams()

    const getSearch = async (name) => {
        const Response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_RECIPE_API}&query=${name}`)
        const data = await Response.json()
        setsearchRecipe(data.results)
    }

    useEffect(() => {
        getSearch(params.search);
    }, [params.search])
    
    return (
        <div className={`flex flex-wrap items-center justify-center ${styles.paddingX} ${styles.paddingY} gap-5`}>
            {
                searchRecipe.map((recipe) => (
                <div
                    key={recipe.id}
                    className="min-h-[15rem] items-center flex flex-col justify-center"
                >
                    <Link to={"/recipe/" + recipe.id}>
                        <img
                        src={recipe.image} 
                        alt={recipe.title} 
                        className="rounded-2xl  object-contain"  
                        />
                        <h4 className='text-center mt-3 font-bold text-[14px] font-poppins'>
                        {recipe.title}
                        </h4>
                    </Link>
                </div>
                ))
            }
        </div>
    )
}

export default SearchPage