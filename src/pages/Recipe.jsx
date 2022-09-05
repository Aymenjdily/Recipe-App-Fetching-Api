import React,{ useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles, {layout} from '../layout/layout'

const Recipe = () => {
  const [Details, setDetails] = useState({})
  let params = useParams()

  const fetchDetail = async (name) => {
    const Response = await fetch(`https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_RECIPE_API}`)
    const data = await Response.json()
    setDetails(data)
    console.log(data)
  }

  useEffect(() => {
    fetchDetail(params.name);

  }, [params.name])
  
  
  return (
    <div className={`flex md:flex-row flex-col mt-10 gap-5 ${styles.paddingX} ${layout.section}`}>
      <div className={layout.sectionInfo}>
        <h1 className='my-3 font-poppins font-bold text-[30px]'>{Details.title}</h1>
        <img 
          src={Details.image} 
          alt={Details.title} 
        className="rounded-3xl "  
        />
      </div>

      <div className={`${layout.sectionInfo}`}>
        <div>
          <h3 className='font-poppins font-bold mb-3'>Instructions :</h3>
          <p className='font-poppins'>{Details.instructions}</p>
        </div>
        <div>
          <h3 className='font-poppins font-bold my-3'>More Informations : </h3>
          <p className='font-poppins'>{Details.summary}</p>
        </div>
      </div>
    </div>
  )
}

export default Recipe