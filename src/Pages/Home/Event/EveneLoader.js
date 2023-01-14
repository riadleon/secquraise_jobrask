import React from 'react';
import { FaFilter } from 'react-icons/fa';

const EveneLoader = ({ user }) => {
    const { data } = user
    return (
        <div className='border-4 border-gray-500/100 h-screen'>
            <div className='flex justify-between items-center '>
                <p className='font-bold'>Event</p>
                <FaFilter></FaFilter>
            </div>
            <div className="flex justify-evenly mt-3 bg-gray-200 hover:bg-gray-400">
                <div className="mr-10">

                    <h1 className="">{data.ID}:{data.Location}</h1>
                    <p className='mt-4'>Person Detected.</p>


                </div>
                <div>
                    <span>{data.Date}</span>
                    <span>{data.Time}</span>
                </div>

            </div>
        </div>
    );
};

export default EveneLoader;