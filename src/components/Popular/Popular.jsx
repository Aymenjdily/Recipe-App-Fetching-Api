import React,{ useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
import styles from '../../layout/layout';

const Popular = () => {
    const [PopularRecipe, setPopularRecipe] = useState([]);

    const getPopularRecipes = async () => {
        const check = localStorage.getItem("popular")
        if(check) {
            setPopularRecipe(JSON.parse(check));
        }
        else{
            const Response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RECIPE_API}&number=9`)
            const data = await Response.json()
            localStorage.setItem("popular", JSON.stringify(data.recipes))
            setPopularRecipe(data.recipes)
            console.log(data.recipes);
        }
    };

    useEffect(() => {
        getPopularRecipes()
    }, []);
    

    return (
        <div className={`font-poppins ${styles.paddingX}`}>
            <div className='my-4'>
                <h3 className='capitalize font-bold my-5 text-[25px]'>popular picks</h3>
                <Splide 
                    options={{
                        perPage : 4,
                        pagination : false,
                        drag : "free",
                        arrows : false,
                        gap : "2rem"
                    }}
                >
                    {
                        PopularRecipe.map((recipe) => (
                            <SplideSlide
                                key={recipe.id}
                            >
                                <div className='min-h-[15rem] rounded-xl overflow-hidden relative cursor-pointer'>
                                    <Link to={"/recipe/" + recipe.id}>
                                        <p className='absolute z-[10] text-white bottom-0 w-full text-center font-bold font-poppins h-[40%] flex items-center justify-center'>
                                            {recipe.title}
                                        </p>
                                        <img
                                            src={recipe.image} 
                                            alt={recipe.title}
                                            className="w-[100%] h-[100%] object-cover rounded-2xl absolute left-0"
                                        />
                                        <div className='absolute z-[5] bg-secondary h-[100%] w-[100%]'/>
                                    </Link>
                                </div>
                            </SplideSlide>
                        ))
                    }
                </Splide>
            </div>
        </div>
    )
}

export default Popular