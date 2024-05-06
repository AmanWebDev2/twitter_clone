import TweetCard from '@/components/home/TweetCard';
import LeftNavigation from '../../../components/home/LeftNavigation';
const page = () => {
  return (
    <div className='flex justify-center w-full h-screen border border-red-400'>
        <div className="border w-1/4">
          <LeftNavigation/>
        </div>
        <div className="border border-green-400 flex justify-center flex-1 overflow-auto">
          <div className="tweets w-3/5">
          <TweetCard/>
          <TweetCard/>
          <TweetCard/>
          <TweetCard/>
          <TweetCard/>
          <TweetCard/>
          </div>
          <div className="w-1/3"></div>
        </div>
    </div>
  )
}

export default page