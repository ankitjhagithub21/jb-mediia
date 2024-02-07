import React from 'react';
import events from '../../data/events';
import Event from '../../components/Event/Event';

const Events = () => {
  return (
    <section id='events'>
      <div className="container py-8 lg:py-24 mx-auto">
        <h2 className='text-center mb-5 text-3xl lg:text-4xl'>Awards & Events</h2>

        <p className='lg:w-3/4 mx-auto text-center mb-5 text-lg lg:text-xl px-3'>The awards & events help to get recognized in the market and also help in networking for investment, business enhancement, brand building, and many more.</p>
        
        <div className='flex flex-wrap justify-center lg:justify-between text-lg lg:text-2xl font-bold'>
          <div className='p-3 w-full lg:w-1/3'>
            <li className='list-none'>Networking With Your Industry And Peer Leaders</li>
          </div>
          <div className='p-3 w-full lg:w-1/3'>
            <li className='list-none'>Highlight And Showcase Your Awards And Achievements</li>
          </div>
          <div className='p-3 w-full lg:w-1/3'>
            <li className='list-none'>Stand Out In The Market And In Your Industry</li>
          </div>
        </div>

        <div className="flex justify-center flex-wrap">
          {events.map((event, index) => {
            return <Event key={index} data={event} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Events;
