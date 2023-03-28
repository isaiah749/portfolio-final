import React, { useState } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";


const ContactMe = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  return (
    <>
      <div className="h-[fit-content] py-10 flex flex-col relative text-center md:text-left max-w-7xl px-10 justify-center space-y-4 md:space-y-8 mx-auto items-center ">
        <h3 className="absolute top-4 uppercase tracking-[20px] text-gray-500 text-2xl">
          Contact
        </h3>

        <div className="flex flex-col space-y-2 pt-10 md:pt-0 md:space-y-10">
          <h4 className="text-2xl -mt-10 md:mt-5 md:text-4xl font-semibold text-center">
            Interested in chatting?{" "}
            <span className="decoration-sky-500/50 block underline">Lets Talk</span>
          </h4>
          <div className="space-y-2 md:space-y-10">
            <div className="flex items-center justify-center space-x-2 md:space-x-5">
              <PhoneIcon className="text-sky-500 h-7 w-7 animate-pulse" />
              <p className="text-lg md:text-xl">+1(812)650-2994</p>
            </div>
            <div className="flex items-center justify-center space-x-2 md:space-x-5">
              <EnvelopeIcon className="text-sky-500 h-7 w-7 animate-pulse" />
              <p className="text-lg md:text-xl">isaiah749@gmail.com </p>
            </div>
            <div className="flex items-center justify-center space-x-2 md:space-x-5">
              <MapPinIcon className="text-sky-500 h-7 w-7 animate-pulse" />
              <p className="text-lg md:text-xl">Bloomington IN</p>
            </div>
          </div>
        </div>
        <form id='contactForm' action='https://formsubmit.co/isaiah749@gmail.com' method='POST' className="flex flex-col space-y-2 w-fit mx-auto">
            <div className='flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2'>
                <input type="text" value={name} name='name' onChange={(e) => setName(e.target.value)} placeholder='Name' className='contactInput' />
                <input type="hidden" name='_next' value='https://www.isaiahmorris.dev/#hero' />
                <input type="email" value={email} name='email' onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='contactInput' />
            </div>
            <input type="text" value={subject} name='subject' onChange={(e) => setSubject(e.target.value)} placeholder='Subject' className='contactInput' />

            <textarea className='contactInput' name='message' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message' />
            <button
            type="submit"
            form='contactForm'
            className="bg-black border-2 border-sky-500 py-[10px] px-5 md:py-5 md:px-10 rounded-md text-white font-bold text-lg "
          >
            Submit
          </button>
        </form>
        <h4
          id="successMessage"
          className="text-sky-500 decoration-green-500 underline text-3xl hide"
        >
          Message Sent!
        </h4>
        <h4
          id="successMessage"
          className="text-sky-500 decoration-red-500 underline text-3xl hide"
        >
          Error! Message Not Sent!
        </h4>
      </div>
    </>
  );
};

export default ContactMe;
