import React from 'react';
import { FaSignInAlt } from 'react-icons/fa';

const Sidebar = () => {
    return (

        <div className="flex flex-col items-center justify-between p-3 dark:bg-cyan-500">


            <button className="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-100">
                    <rect width="352" height="32" x="80" y="96"></rect>
                    <rect width="352" height="32" x="80" y="240"></rect>
                    <rect width="352" height="32" x="80" y="384"></rect>
                </svg>
            </button>
            <button className="p-2">
                <FaSignInAlt className="w-5 h-5 fill-current dark:text-gray-100"></FaSignInAlt>
            </button>




        </div>


    );
};

export default Sidebar;