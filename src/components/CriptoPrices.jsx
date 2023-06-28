import { useCripto } from '../hooks/useCripto'
import Coin from './Coin'


function CriptoPrices() {
   
const {criptos} = useCripto()
  return (
    <>
     {/* Refactorizar esto con un map luego */}
    <div className='mt-5 w-[90%] mx-auto flex justify-between p-3 md:p-7'>
      <p className='text-stone-600 text-center font-bold'>Nombre</p>
      <p className='text-stone-600 text-center font-bold'>Precio Actual</p>
      <p className='text-stone-600 text-center font-bold'>Precio+alto</p>
      <p className='text-stone-600 text-center font-bold'>Variación</p>
    </div>
    {criptos.map((cripto) =>(
        <Coin
        cripto={cripto}
        key={cripto.CoinInfo.Id}/>
    ))}
    </>

    
    
  )
}

export default CriptoPrices
