import TweetCard from '@/components/home/TweetCard';
import LeftNavigation from '../../../components/home/LeftNavigation';
const page = () => {
  return (
    <div className='grid grid-cols-12 h-screen'>
        <div className="col-span-3">
          <LeftNavigation/>
        </div>
        <div className="col-span-6 border-r-[0.5px] border-l-[0.5px] min-h-screen overflow-y-scroll border-r-slate-500">
          <TweetCard/>
          <TweetCard/>
          <TweetCard/>
          <TweetCard/>
          <TweetCard/>
          <TweetCard/>
          <TweetCard/>
          <TweetCard/>
          <TweetCard/>
          <TweetCard/>
        </div>
        <div className="col-span-3"></div>
    </div>
  )
}

export default page