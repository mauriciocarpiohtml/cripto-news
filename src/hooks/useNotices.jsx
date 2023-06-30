import { useState, useEffect } from "react"

export function useNotices(){
    const [notices, setNotices] = useState([])
  
 // Consultar a la api de noticias
   useEffect(() => {
     async function searchNews(){
       const url = `https://newsapi.org/v2/everything?q=bitcoin&language=es&apiKey=${import.meta.env.VITE_API_KEY}`
       const response = await fetch(url)
       const results = await response.json()
       //Filtro por la url porque el enlace viene roto
       const noticesImages = results.articles.filter(article => 
        article.urlToImage !== null && !article.urlToImage.startsWith("https://readwrite.com"))
       setNotices(noticesImages.slice(0, 18))
     }
     searchNews()
   },[])

    return {notices}
}