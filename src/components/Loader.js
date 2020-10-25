import React from 'react';
import Spinner from 'react-loader-spinner'

const Loader = () => {
    return (
        <div className='spinner'>
            <Spinner type='Puff' color='#038E9F' height={100} width={100} />
        </div>
    );
};

export default Loader;