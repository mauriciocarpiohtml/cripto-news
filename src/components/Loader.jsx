import { ThreeDots } from  'react-loader-spinner'

function Loader() {
  return (
    <div className='flex justify-center items-center'>
      <ThreeDots
      height="80" 
      width="90" 
      radius="9"
      color="#10b981 " 
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
      />
    </div>
    
  )
}

export default Loader
