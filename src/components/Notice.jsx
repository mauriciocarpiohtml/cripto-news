import { Link } from "react-router-dom"

function Notice({notice}) {
  return (
    <Link 
    to={notice.url}
    target="_blank" >
      <div className='w-[320px] lg:w-[380px] h-[350px] shadow-lg cursor-pointer flex flex-col 
        gap-3 mb-5 p-5 rounded-md transition-all duration-500 ease-out hover:scale-110'>
        <img
        className='object-contain max-w-[340px] max-h-[266px]'
        src={notice?.urlToImage}
        />
        <h2 className='text-stone-700 font-bold text-left text-sm mt-1'>
          {notice?.title}
        </h2>
      </div>
    </Link>
    
  )
}

export default Notice
