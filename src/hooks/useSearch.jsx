import { useContext, useState } from "react"
import News from "../context/ContextNews"


export function useSearch(){

     const {setResume} = useContext(News)
    const [urlArticle, setUrlArticle] = useState('')
	
    async function handleForm(e){
        e.preventDefault()
        if(urlArticle === ''){
            alert('Todos los campos son obligatorios')
            return
        }

		const url = 'https://tldrthis.p.rapidapi.com/v1/model/abstractive/summarize-url/';
		const options = {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				'X-RapidAPI-Key': '53174443d0mshaf42d175cf13aacp19c5a1jsnf6a5f2967696',
				'X-RapidAPI-Host': 'tldrthis.p.rapidapi.com'
			},
			body: JSON.stringify({
				url: `${urlArticle}`,
				min_length: 200,
				max_length: 300,
				is_detailed: false
			})
		};

		try {
			const response = await fetch(url, options)
			const result = await response.json()
		    setResume(result.article_text.toString())
		} catch (error) {
			console.error(error)
		}
	}

    return{urlArticle, setUrlArticle, handleForm}
}