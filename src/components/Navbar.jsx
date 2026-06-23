import { useLocation, Link,NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { assets, menuLinks } from '../assets/assets';

const Navbar = ({setShowLogin}) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const linkClass = "text-center hover:border-b py-1 max-sm:w-full max-sm:border-y max-sm:border-transparent max-sm:hover:border-y max-sm:hover:border-gray-600";
//   ({isActive}) => isActive? 'text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' : 'hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'

  useEffect(()=> {
    if(open) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    return ()=>{
      document.body.classList.remove('overflow-hidden')
    }

  }, [open]);

  return (
    <div className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-gray-600 border-b border-borderColor relative transition-all
      ${location.pathname === "/" && "bg-light"}  ${open? 'overflow-hidden':''} `}>
      <Link to="/">
        <img src={assets.logo} alt="logo" className="h-8" />
      </Link>
      <div className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-t border-borderColor right-0 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4 transition-all duration-300 z-50
        ${location.pathname === "/" ? "bg-light" : "bg-white"} ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}`}>
        { menuLinks.map((link, index) => (
          <NavLink 
            key={index} 
            to={link.path}
            className={linkClass}>
            {link.name}
          </NavLink>
        ))}

        <div className="hidden lg:flex items-center text-sm gap-2 border border-borderColor px-3 rounded-full max-w-56"> 
          <input type="text" className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" placeholder="Search products" />
          <img src={assets.search_icon} alt="Search" />
        </div>
        <button onClick={()=> navigate('/owner')} className={`cursor-pointer ${linkClass}`} >Dashboard </button>
        <div className='flex max-sm:flex-col items-start max-sm:items-center gap-6 max-sm:w-full py-4'>
          <button onClick={()=> setShowLogin(true)} className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition-all text-white rounded-lg">Login</button>
        </div>
      </div>

      <button className='sm:hidden cursor-pointer' aria-label="Menu" onClick={()=> setOpen(!open)}>
        <img src={open? assets.close_icon: assets.menu_icon} alt='menu' />
      </button>
    </div>
  )
}

export default Navbar