import React,{ useState, useEffect} from 'react'
import styles from '../layout/layout'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Cuisine = () => {
  const [Cuisine, setCuisine] = useState([])
  const params = useParams()

  const getCuisine = async (type) => {
    const Response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_RECIPE_API}&number=9&cuisine=${type}`)
    const data = await Response.json()
    setCuisine(data.results)
    console.log(data.results)
  }

  useEffect(() => {
    getCuisine(params.type)
  }, [params.type])
  
  return (
    <motion.div
      animate={{ opacity : 1 }}
      initial={{ opacity : 0 }}
      exit ={{ opacity : 0 }}
      transition ={{ duration: 0.5 }}
    >
      <div className={`flex flex-wrap items-center justify-center ${styles.paddingX} ${styles.paddingY} gap-5`}>
        {
          Cuisine.map((recipe) => (
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
    </motion.div>
  )
}

export default Cuisine