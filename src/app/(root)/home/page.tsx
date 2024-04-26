import LeftNavigation from '../../../components/home/LeftNavigation';
const page = () => {
  return (
    <div className='grid grid-cols-12 min-h-screen'>
        <div className="col-span-3">
          <LeftNavigation/>
        </div>
        <div className="col-span-6 border-r-[0.5px] border-l-[0.5px] border-r-slate-500"></div>
        <div className="col-span-3"></div>
    </div>
  )
}

export default page