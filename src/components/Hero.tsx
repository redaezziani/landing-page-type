import Bg from '../assets/images/Rectangle 1.png'
const Hero = () => {
  return (
    <div
    className=' relative mt-10 rounded-md  w-full sm:w-[80%] h-[500px]  flex justify-center items-center'
    >
        <img
        src={Bg}
        alt="" />
        <div className="w-full z-10 flex flex-col justify-start  items-start gap-2 sm:w-[40%] absolute right-0 ">
            <h2
            className=' text-[1.25rem] text-slate-800 text-center sm:text-left'
            >
                Welcom to Our 
            </h2>
            <h1
            className=' text-7xl text-slate-800 font-bold text-center sm:text-left'
            >
                Furniture Store
            </h1>
        </div>
    </div>
  )
}

export default Hero