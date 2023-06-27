import { createContext } from "react"

const News = createContext()

function ContextNews({children}) {
    const hola ='saludar'
  return (
    <News.Provider
    value={{hola}}>
      {children}
    </News.Provider>
  )
}

export default News

export {ContextNews}
