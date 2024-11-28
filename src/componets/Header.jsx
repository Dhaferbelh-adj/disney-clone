import React, { useState } from 'react';
import logo from './../assets/images/logo.png';
import avatar from './../assets/images/user.png'
import { HiHome, HiStar, HiPlayCircle, HiTv, HiMagnifyingGlass } from 'react-icons/hi2';
import { HiPlus, HiDotsVertical } from 'react-icons/hi';
import HeaderItem from './HeaderItem';

function Header() {
  const [toggle,setToggle]=useState(false)
  const menu = [
    {
      name: 'Home',
      icon: HiHome,
    },
    {
      name: 'SEARCH',
      icon: HiMagnifyingGlass,
    },
    {
      name: 'WATCH LIST',
      icon: HiPlus,
    },
    {
      name: 'ORIGINALS',
      icon: HiStar,
    },
    {
      name: 'MOVIE',
      icon: HiPlayCircle,
    },
    {
      name: 'SERIES',
      icon: HiTv,
    },
  ];

  return (
    <div className="flex items-center justify-between px-4 py-2 ">
  <div className="flex items-center gap-8 py-2">
    <img src={logo} className="w-[80px] object-cover md:w-[115px]" alt="Logo" />
    <div className="hidden md:flex gap-8">
      {menu.map((item, index) => (
        <HeaderItem  name={item.name} icon={item.icon} />
      ))}
    </div>
    <div className="flex md:hidden gap-8">
      {menu.map((item, index) => index<3&&(
        <HeaderItem  name={''} icon={item.icon} />
      ))}
    
    <div className="md:hidden" onClick={()=>setToggle(!toggle)}>
        <HeaderItem  name={''} icon={HiDotsVertical} />
        {toggle? <div className='absolute mt-3 bg-[#121212] border-[1px] p-3 border-gray-700 px-5 py-4'>
        {menu.map((item, index) => index>2&&(
        <HeaderItem  name={item.name} icon={item.icon} />
      ))}
        </div>:null}
    </div>
    </div>
    
  </div>
  <img src="./../assets/images/user.png" className="w-[40px] rounded-full " />
</div>

  );
}

export default Header;
