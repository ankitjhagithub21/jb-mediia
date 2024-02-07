import React from 'react'
import "./contact.css"
import { IoLocation } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
const Contact = () => {
  return (
    <section id='contact'>
      <div className="container mx-auto py-24 px-5 flex flex-wrap ">
        <div className="lg:w-1/2 flex flex-col gap-5 w-full">
          <h2 className=' text-white text-3xl'>Contact</h2>
          <form action="#" method="post">
            {/* Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block     font-medium   ">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block     font-medium   ">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            {/* Mobile */}
            <div className="mb-4">
              <label htmlFor="mobile" className="block     font-medium   ">
                Mobile
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            {/* Subject */}
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block     font-medium   "
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            {/* Message */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block     font-medium   "
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 p-2 w-full border rounded-md"
                defaultValue={""}
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-purple-500 text-white px-4 py-2 rounded-md"
            >
              Submit
            </button>
          </form>

        </div>
        <div className="lg:w-1/2 flex flex-col items-start py-10 lg:p-10 justify-center gap-5 text-xl address w-full">
          <h2>Get in touch with us</h2>
          <p className='flex items-center gap-3 justify-center'><IoLocation /> Bangalore, India</p>

          <p className='flex items-center gap-3 justify-center'><IoLocation />  Pine Brook, New Jersey, USA</p>
          <p className='flex items-center gap-3 justify-center'><IoMdMail />  connect@jbmediia.com</p>

        </div>
      </div>
    </section>
  )
}

export default Contact