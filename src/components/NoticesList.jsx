import Notice from '../components/Notice'
import { useNotices } from '../hooks/useNotices'

function NoticesList() {
  
const {notices} = useNotices()

  return (
    <div className='mt-5 flex gap-5 flex-wrap w-[90%] mx-auto'>
      {notices?.map((notice) =>(
        <Notice
        notice={notice}
        key={notice.title}/>
      ))}
      
    </div>
  )
}

export default NoticesList
