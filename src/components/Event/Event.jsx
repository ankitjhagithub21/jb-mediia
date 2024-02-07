import React from 'react'

const Event = ({data}) => {
    return (
        <div className="p-4 lg:w-1/3 md:w-1/2 w-full">
            <div className="shadow-lg bg-gray-100 rounded-lg overflow-hidden">
                <img
                    className='object-cover object-center h-56 w-full'
                    src={data.image}
                    alt="blog"
                    
                    
                />

            </div>
        </div>
    )
}

export default Event