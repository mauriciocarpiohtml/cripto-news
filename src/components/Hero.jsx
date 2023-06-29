import Heroimg from '../images/money.jpg'

function Hero() {
  return (
    <div className='w-[90%] md:w-[80%] flex flex-col-reverse md:flex-row items-center gap-10 justify-center mx-auto mb-3'>
      <div className='md:w-[50%] flex flex-col text-center md:text-left'>
        <h2 className='text-stone-800 text-xl md:text-4xl font-bold leading-normal'>
          Explora las últimas novedades del universo de las criptomonedas
        </h2>
        <p className='text-stone-600 leading-normal uppercase font-bold mt-1'> y crea contenido en 10 Segundos.</p>
        <button className='p-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-md text-white font-bold md:w-[30%] mt-3 rounded-md cursor-pointer'>
          Empezar
        </button>
      </div>
      <div className='w-[70%] md:w-[50%]'>
       <img src={Heroimg} alt='Smarphone con cripto'/>
      </div>
    </div>
  )
}

export default Hero
