import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink, useLocation } from 'react-router-dom' // Imported useLocation to handle active state more precisely

const Sidebar = () => {
    const location = useLocation(); // Get current location
    const sidebarLinks =[ 
        {name :"Dashboard", path:"/owner",icon:assets.dashboardIcon},
        {name :"Add Room", path:"/owner/add-room",icon:assets.addIcon},
        {name :"List Room", path:"/owner/list-room",icon:assets.listIcon},
    ];

  return (
    <div className='md:w-64 w-16 border-r h-full text-base border-gray-300 pt-4 flex flex-col transition-all duration-300'>
        {sidebarLinks.map((item,index)=>(
            // Use 'end' prop for exact match for the Dashboard link,
            // otherwise, NavLink handles active state for nested routes automatically.
            <NavLink 
                to={item.path} 
                key={index} 
                end={item.path === '/owner'} // Apply 'end' only for the dashboard link
                className={({isActive})=>
                    `flex items-center py-3 px-4 md:px-8 gap-3 
                    ${isActive 
                        ? "border-r-4 md:border-r-[6px] bg-blue-600/10 border-blue-600 text-blue-600"
                        : "hover:bg-gray-100/90 border-white text-gray-700"
                    }`
                }
            >
                <img src={item.icon} alt={item.name} className='min-h-6 min-w-6' />
                <p className='md:block hidden text-center'>{item.name}</p> {/* Fixed: 'hiddden' to 'hidden' */}
            </NavLink>
        ))}
    </div>
  );
};

export default Sidebar;