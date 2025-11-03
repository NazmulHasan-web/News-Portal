import React from 'react';
import swimeImg from '../../assets/swimming.png'
import classImg from '../../assets/class.png'
import playImg from '../../assets/playground.png'
import bgImage from '../../assets/bg.png'

const QZone = () => {
    return (
        <div className='bg-base-200 p-4'>
            <h2 className='font-bold mb-5'>Q-Zone</h2>
            <div className='space-y-5'>
                <img src={swimeImg} alt="" />
                <img src={classImg} alt="" />
                <img src={playImg} alt="" />
                <img src={bgImage} alt="" />
            </div>
        </div>
    );
};

export default QZone;