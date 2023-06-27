
function Coin({cripto}) {
  return (
    <div className="w-[90%] mx-auto flex justify-between p-5 items-center text-center shadow-md mb-3 rounded-md">
      <p className='text-stone-600 text-left font-bold w-[50px]'>{cripto.CoinInfo.FullName}</p>
      <p className='text-emerald-700 text-left font-bold '>{cripto.DISPLAY.USD.PRICE}</p>
      <p className='text-stone-600 text-left font-bold'>{cripto.DISPLAY.USD.HIGH24HOUR}</p>
      <p className='text-stone-600 text-left font-bold'>{cripto.DISPLAY.USD.CHANGEPCT24HOUR}</p>
    </div>
  )
}

export default Coin
