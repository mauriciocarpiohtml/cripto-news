const optionsSummarize = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_SUMMARIE_API_KEY,
		'X-RapidAPI-Host': 'article-summarizer.p.rapidapi.com'
	}
}

export {optionsSummarize}