import React from 'react';

const ResolvedCounter = ({resolvedCounter}) => {
    return (
        <div className='flex flex-col items-center justify-center space-y-3 w-[50%] py-10 md:py-20 rounded-md bg-no-repeat [background-position:left_center,right_center,center]
        [background-size:auto,auto,cover] bg-[url("/assets/vector1.png"),url("/assets/vector_2.png"),linear-gradient(125.07deg,#54CF68_0%,#00827A_100%)]'>
            <h3 className='text-2xl text-white'>Resolved</h3>
            <h1 className='text-4xl font-bold text-white'>{resolvedCounter}</h1>
        </div>

    );
};

export default ResolvedCounter;