import { createContext, useState } from "react"

const News = createContext()

function ContextNews({children}) {

    const [resume, setResume] = useState('')
    const [post, setPost] = useState([])

  return (
    <News.Provider
    value={{resume, setResume, post, setPost}}>
      {children}
    </News.Provider>
  )
}

export default News

export {ContextNews}
