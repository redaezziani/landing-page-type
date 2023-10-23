import Logo from '../assets/images/Intersect.png'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { CiSearch } from 'react-icons/ci'
const Navbar: React.FC = () => {
    const list = [
        {
            name: 'Home',
            link: '#'
        },
        {
            name: 'Shop',
            link: '#shop'
        },
        {
            name: 'Blog',
            link: '#blog'
        },
        {
            name: 'About',
            link: '#about'
        },
    ]
  return (
    <div
    className='  fixed top-0 w-full p-2 bg-white sm:w-[80%] flex justify-between  items-end'
    >
        <div className="group--logo gap-1 flex justify-center items-center">
            <img
             src={Logo}
             alt=""
             className='w-7 h-7'
            />
            <div className="group--text flex flex-col justify-start items-start ">
                <h1 className=' text-sm font-semibold text-slate-800'>Furniture</h1>
                <p className='text-xs font-medium text-slate-600'>We Provide Good Furniture</p>
            </div>
        </div>

        <div className="group--links flex justify-center items-end gap-20 ">
            <div className="group--input flex relative gap-1 border-b-[1.5px] border-slate-500 w-44 p-2">
                <CiSearch className='w-5 h-5 text-slate-500' />
                <input
                placeholder='Search smothing...'
                className='w-full outline-none text-sm text-slate-400 bg-transparent '
                type="text" />
            </div>
            <ul className='flex justify-center items-center gap-4'>
                {list.map((item, index) => (
                    <li key={index} className='text-sm font-medium text-slate-800 hover:text-slate-600 transition duration-300 ease-in-out'>
                        <a href={item.link}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </div>
        <div className="group--buttons flex gap-2 justify-center items-end">
            <div className="flex gap-2 items-center justify-center">
                <AiOutlineHeart className='w-5 h-5 text-sm text-slate-800' />
                <p
                className='text-sm font-medium text-slate-800'
                >
                    Love
                </p>
            </div>
            <div className="flex gap-2 items-center justify-center">
                <HiOutlineShoppingBag className='w-5 h-5 text-sm text-slate-800' />
                <p
                className='text-sm font-medium text-slate-800'
                >
                    Cart 
                </p>
            </div>
        </div>
    </div>
  )
}

export default Navbar