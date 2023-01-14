import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Loader from './Loader';


const Information = () => {
    const users = useLoaderData([]);
    
    
    return (
        <div className='mt-20'>
            {
                users.map(user => <Loader
                key={user.id}
                user={user}
                ></Loader>)
            }

        </div>
    );
};

export default Information;