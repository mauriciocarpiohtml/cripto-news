import { useState, useEffect } from "react"
import Notice from '../components/Notice'


function NoticesList() {
  const [notices, setNotices] = useState([])
  
  https://readwrite.com/wp-content/uploads/2023/05/pexels-rdne-stock-project-8370757.jpg

  // Consultar a la api de noticias
   useEffect(() => {
     async function searchNews(){
       const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${import.meta.env.VITE_API_KEY}`
       const response = await fetch(url)
       const results = await response.json()
       const noticesImages = results.articles.filter(article => 
        article.urlToImage !== null && !article.urlToImage.startsWith("https://readwrite.com"))
       setNotices(noticesImages.slice(0, 12))
       console.log(noticesImages)
     }
     searchNews()
   },[])


  return (
    <div className='mt-5 flex gap-5 flex-wrap w-[90%] mx-auto'>
      {notices?.map((notice) =>(
        <Notice
        notice={notice}
        key={notice.title}/>
      ))}
      
    </div>
  )
}

export default NoticesList
