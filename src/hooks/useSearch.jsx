import { useContext, useState, useEffect} from "react"
import News from "../context/ContextNews"


export function useSearch(){

    const {resume, setResume, post, setPost, setLoading} = useContext(News)

	// Url del articulo del input 
    const [urlArticle, setUrlArticle] = useState('')

	// Mostrar componente del post
	const [showComponent, setShowComponent] = useState(false)

	
	// Html a insertar
	let html;
	
	// Valida el form y hace la peticion a la api de summarize
    async function handleForm(e){
        e.preventDefault()
        if(urlArticle === ''){
            alert('Todos los campos son obligatorios')
            return
        }

		setShowComponent(true)
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

	// Funcion para crear el post API OPEN AI
		useEffect(() =>{
			async function createPost(){
				if(resume !== ''){
					console.log(resume)
					try {
						const response = await fetch('http://localhost:5017', {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json'
							},
							body: JSON.stringify({ prompt : ` ${resume}, Convierte este articulo en un post de Linkedin,
							El post tiene que ser dinamico y debe incluir tecnicas de copy para mejorar la
							retencion al leerlo. tiene que ser un post de minimo 350 caracteres con los puntos mas importantes
							del articulo. Separa el titular del resto del texto y cada 20 palabras utiliza saltos de linea de html.
							Resalta los puntos mas importantes con emojis`})
						})
				
						const data = await response.json()
						setLoading(false)
						setPost(data.bot)
					} catch (error) {
						console.log(error)
					}
				}
			}
			createPost()
		},[resume])

		html = post
		
    return{urlArticle, setUrlArticle, handleForm, html, showComponent}
}
