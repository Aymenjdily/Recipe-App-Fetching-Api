import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const [Value, setValue] = useState("")
    const navigate = useNavigate()
    const submitHandle = (e) => {
        navigate('/search/'+Value)
        e.preventDefault()
    }
    return (
        <form
            className='relative  w-full items-center flex justify-center'
            onSubmit={submitHandle}
        >
            <div className='position relative bg-black flex flex-row gap-2 items-center p-3 text-white rounded-2xl'>
                <input
                    value={Value}
                    onChange={(e) => setValue(e.target.value)}
                    type="text" 
                    className='border-0 text-[1rem] rounded-xl outline-none w-[500px] bg-black pl-3 text-white'
                />
                {/* <p>{Value}</p> */}
            </div>
        </form>
    )
}

export default Search