import './css/App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'


function App()  {

  return (
    <div
    className=" relative min-h-screen w-full flex flex-col justify-start items-center"
    >
      <Navbar />
      <Hero/>
    </div>
  )
}

export default App
