import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const ApiDemo2 = () => {

    const [movie, setmovie] = useState()

    const getMovieData = async()=>{


        const res = await axios.get("https://moviesdatabase.p.rapidapi.com/titles/search/title/Titanic",{
            
                headers: {
                    'X-RapidAPI-Key': '2cc1fb7fd1msh4c4e1eb5e0cf8e5p13cfd1jsn422b10471be6',
                    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
                  }
            
        })

        console.log(res.data.results)
        setmovie(res.data.results[0])



    }

    
    
  return (
    <div>
        <h1>API DEMO 2</h1>
        <button onClick={()=>getMovieData()}>Get Movie Data</button>
    </div>
  )
}

