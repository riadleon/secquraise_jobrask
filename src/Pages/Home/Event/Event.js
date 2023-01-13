import React from 'react';
import { FaFilter } from 'react-icons/fa';

const Event = () => {
    return (

        <div>
            <div className='flex justify-between items-center border-green-800'>
                <p>Event</p>
                <FaFilter></FaFilter>
            </div>
            <div className="flex flex-col divide-gray-700 mt-3 bg-gray-300">
                <div className="">
                    <span>12 June</span>
                    <h1 className="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>

                </div>
                <div className="">
                    <span>12 June</span>
                    <h1 className="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>

                </div>
                <div className="">
                    <span>12 June</span>
                    <h1 className="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>

                </div>
            </div>
        </div>

    );
};

export default Event;