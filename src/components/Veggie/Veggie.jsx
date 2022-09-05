import React,{ useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
import styles from '../../layout/layout';

const Veggie = () => {
  const [VeggieRecipe, setVeggieRecipe] = useState([]);

  const getVeggieRecipes = async () => {
    const check = localStorage.getItem("veggie")
    if(check) {
      setVeggieRecipe(JSON.parse(check));
    }
    else{
      const Response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RECIPE_API}&number=9&tags=vegetarian`)
      const data = await Response.json()
      localStorage.setItem("veggie", JSON.stringify(data.recipes))
      setVeggieRecipe(data.recipes)
      console.log(data.recipes);
    }
  };

  useEffect(() => {
    getVeggieRecipes()
  }, []);

  return (
    <div className={`font-poppins ${styles.paddingX}`}>
      <div className='my-4'>
        <h3 className='capitalize font-bold my-5 text-[25px]'>vegetarians picks</h3>
        <Splide
          options={{
            perPage : 3,
            pagination : false,
            drag : "free",
            arrows : false,
            gap : "2rem"
          }}
        >
          {
            VeggieRecipe.map((recipe) => (
              <SplideSlide
                key={recipe.id}
              >
                <div className='min-h-[20rem] rounded-xl overflow-hidden relative cursor-pointer'>
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

export default Veggie