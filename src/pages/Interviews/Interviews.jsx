import React from 'react'

const Interviews = () => {
  const boxes = [
    "./interviews/interview-1.webp",
    "./interviews/interview-2.webp",
    "./interviews/interview-3.webp"
  ]
  return (
    <section id='interviews'>
      <div className="container px-5 py-24 mx-auto">
        <h2 className='text-center text-3xl lg:text-4xl mb-5'>
          Interviews
        </h2>
        <p className='text-center lg:w-3/4 w-full  mx-auto mb-10 text-xl'>We help our clients in publishing interviews, articles, advertising company’s product/services, CXO’s story, podcasting etc. This helps clients to understand the brand story.  </p>
        <div className='flex flex-wrap lg:text-2xl text-lg font-bold mb-5'>
          <div className='lg:w-1/3 md:w-1/2 w-full'>
            <li className='list-none'>Helps To Connect Customers  And Company Together
            </li>
          </div>
          <div className='lg:w-1/3 md:w-1/2 w-full'>
            <li className='list-none lg:text-center text-left'>Brand Recalling
            </li>
          </div>
          <div className='lg:w-1/3 md:w-1/2 w-full'>
            <li className='list-none'>Awareness about Products/Services
            </li>
          </div>

        </div>
        <div className="flex flex-wrap -m-4">
          {
            boxes.map((box, index) => {
              return <div className="p-4 md:w-1/3 cursor-pointer hover:opacity-80 " key={index}>
                <img src={box} alt="interview" className='w-full h-full object-cover object-center rounded-md shadow' />
              </div>
            })
          }



        </div>
      </div>
    </section>

  )
}

export default Interviews