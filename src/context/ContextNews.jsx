import { createContext, useState } from "react"

const News = createContext()

function ContextNews({children}) {

    const [resume, setResume] = useState('')
    const [post, setPost] = useState('')

    const [loading, setLoading] = useState(true)

  return (
    <News.Provider
    value={{resume, setResume, post, setPost, loading, setLoading}}>
      {children}
    </News.Provider>
  )
}

export default News

export {ContextNews}
