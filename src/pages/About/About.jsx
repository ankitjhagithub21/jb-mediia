import React from 'react'

const About = () => {
    return (
        <section id='about'>
            <div className="container mx-auto flex flex-wrap px-5 py-12">
                <div className='lg:w-1/2 w-full flex flex-col gap-3 text-xl'>
                    <h2 className='text-5xl'>About Us</h2>
                    <p>We believe in brand building. We would love to serve you!</p>

                    <p>We have a dynamic media professionals who bring together vast experience from the
                        domains of brand management, advertising, public relations, event management, media planning and many more. We believe in Brand Building and So we help our clients to accelerate in the market with the help of cutting edge technologies in the marketing minds.
                    </p>
                    <p>JB Mediia is a global media platform and aims to bridge a need gap in brand consulting services with a  dynamic approach from strategizing to its execution, we do it all for the clients we work with. We help our clients to grow their brand through various marketing minds, promotions strategies in the market. </p>

                    <a className='rounded-full px-5 py-3 border-2 w-fit hover:bg-gray-200' href='#contact'>Contact Us</a>
                </div>
                <div className="lg:w-1/2 w-full mt-5 lg:mt-0 flex lg:p-5 p-0 items-center justify-center">
                <img src="https://t4.ftcdn.net/jpg/06/19/35/37/360_F_619353715_nWhd3kqg4y3rYckBoHfUmOztQ0pKNNLy.jpg" alt="about-us" className='rounded-md' />
                </div>
            
            </div>
        </section>
    )
}

export default About