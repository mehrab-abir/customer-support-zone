import React from 'react';
import ProgressCounter from './ProgressCounter';
import ResolvedCounter from './ResolvedCounter';

const StatusCounter = ({progressCounter,resolvedCounter}) => {
    return (
        <div className='my-10 md:pt-25'>
            <div className="container w-[90%] mx-auto flex gap-6 items-center justify-between">
                <ProgressCounter progressCounter={progressCounter}></ProgressCounter>
                <ResolvedCounter resolvedCounter={resolvedCounter}></ResolvedCounter>
            </div>
        </div>
    );
};

export default StatusCounter;