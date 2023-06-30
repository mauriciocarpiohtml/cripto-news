import { useSearch } from "../hooks/useSearch"
import Post from "./Post"

function Search() {
  const {urlArticle, setUrlArticle, handleForm, html, showComponent} = useSearch()
  return (
    <>
      <div className='rounded-lg p-8 bg-gray-100 z-10 shadow-lg h-[90%] mx-auto flex flex-col justify-center items-center'>
          <div 
          className='mt-5 mx-auto md:w-[50%] flex flex-col justify-center items-center'>
            <h2 
            className=' text-2xl md:text-5xl uppercase text-center font-black 
            text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-800'>Convierte noticias en publicaciones de Linkedin</h2>
            <p 
            className='text-center text-md mb-3 mt-3 text-stone-400'>Pega la url del artículo que quieras hablar, listo tienes una publicación para compartir.</p>
            <input
              onChange={(e) => setUrlArticle(e.target.value)}
              value={urlArticle}
              type='text'
              className='w-full rounded-lg border border-[#5114ad68] mt-3 p-3 focus:outline-none'
              placeholder='https://www.forbesargentina.com/adopcion-crypto-argentina'/>
            <button
              onClick={(e) => handleForm(e)}
              className='p-3 w-full md:w-[50%] mx-auto mt-5 mb-3 rounded-lg font-black text-center text-white bg-gradient-to-r from-emerald-500 to-emerald-600 uppercase'
              > Crear publicación
            </button>
          </div>
      </div>

      {showComponent && <Post
                        html={html}/>}
      
    </>
  )
}

export default Search
