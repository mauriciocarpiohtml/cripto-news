import { useState, useEffect } from "react"

export function useCripto(){
    const [criptos, setCriptos] = useState([])

    useEffect(() =>{
        async function searchTopCriptos(){
         const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
        const response = await fetch(url) 
        const results = await response.json()
        setCriptos(results.Data)
        }
        searchTopCriptos()
    },[])
    return{criptos}
}