import { useContext } from "react"
import News from "../context/ContextNews"
import Loader from "../components/Loader"

function Post({html}) {

  const {loading} = useContext(News)

  return (
    <div className='mt-5 w-[70%] h-[50vh] mx-auto justify-center items-center p-5 mb-10'>
      {loading ? <Loader/> 
      : <div
         className="text-stone-600 leading-[2.4]" 
         dangerouslySetInnerHTML={{ __html: html }} />}
    </div>
  )
}

export default Post
