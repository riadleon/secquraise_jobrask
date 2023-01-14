import React from 'react';

import { useLoaderData } from 'react-router-dom';
import EveneLoader from './EveneLoader';

const Event = () => {
    const users = useLoaderData([])
    return (

        <div className=''>
            {
                users.map(user => <EveneLoader
                    key={user.id}
                    user={user}
                ></EveneLoader>)
            }
        </div>

    );
};

export default Event;