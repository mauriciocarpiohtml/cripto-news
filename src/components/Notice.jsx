import React from 'react'

function Notice({notice}) {
  console.log(notice.urlToImage)
  return (
    <div className='w-[380px] h-[300px] shadow-lg cursor-pointer flex flex-col 
    gap-3 mb-5 p-5 rounded-md transition-all duration-500 ease-out hover:scale-110'>
      <img
      src={notice?.urlToImage || 'https://i.insider.com/6493236b1465b60019987dc1?width=1200&format=jpeg'}
       />
       <h2 className='text-stone-700 font-bold text-left '>
         {notice?.title}
       </h2>
    </div>
  )
}

export default Notice
