import React from 'react';

const Progress = ({ name, arr }) => {
    return (
        <div data-aos="fade-in">
            <b><i>{name}</i></b>
            <hr className="my-4" />
            {
                arr.map((item, index) => {
                    const percentage = item.percent;
                    return (
                        <div key={index} className='mb-6'>
                            <div className='flex justify-between mb-1'>
                                <span className='font-semibold'>{item.skill}</span>
                                <span className="text-orange-500 font-semibold">{item.percent}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-2.5 rounded-full" style={{ width: `${percentage}` }}></div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Progress;
