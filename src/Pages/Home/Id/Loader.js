import React from 'react';

const Loader = ({ user }) => {
    const { data } = user
    
    return (
        <div>
            <p className='font-bold text-2xl'>{data.ID}</p>
            <p className='font-bold text-xl'>Person Detected</p>
            <br />
            <p className='font-semibold'>Name: {data.Name}</p>
            <p className='font-semibold'>Location: {data.Location}</p>
            <p className='font-semibold'>Date: {data.Date}</p>
            <p className='font-semibold'>Time: {data.Time}</p>
            <br />
            <p className='font-semibold'>Description: Female 25 detected <br /> at Chennai on 9th january, 2023</p>
        </div>
    );
};

export default Loader;