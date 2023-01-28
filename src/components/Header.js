import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import log_out from '../assets/logout.png'



const Header = () => {
   return (
      <div className="navbar bg-base-100 px-2">
         <div className="flex-1">
            <Link to='/'>
               <img src={logo} alt="" className=' h-14 w-14' />
            </Link>
         </div>
         <div className="flex-none">
            <button className="btn btn-square btn-ghost">
               <img src={log_out} alt="" className=' h-8 w-8' />
            </button>
         </div>
      </div>
   );
};

export default Header;