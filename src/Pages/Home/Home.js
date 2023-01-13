import React from 'react';
import Information from './Id/Information';
import female from '../../assets/img/Female01.jpg'
import Event from './Event/Event';

const Home = () => {
    return (
        <div className='flex ml-5'>
            <div> <Information></Information> </div>
            <div className='ml-84 mt-12'>
                <p className='text-center text-lg font-bold'>Female</p>
                <img className='w-3/4 ml-40' src={female} alt="" />
            </div>
            <div className=''> <Event></Event> </div>
        </div>
    );
};

export default Home;