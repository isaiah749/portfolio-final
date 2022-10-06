import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:isaiah749@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`
  };

  return (
    <>
      <div className="h-screen flex flex-col relative text-center md:text-left max-w-7xl px-10 justify-center space-y-4 md:space-y-8 mx-auto items-center ">
        <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
          Contact
        </h3>

        <div className="flex flex-col space-y-2  md:space-y-10">
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
        <form id="form" onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2">
            <input type="text" {...register('name')} placeholder="Name" className="contactInput" />{" "}
            <input type="email" {...register('email')} placeholder="Email" className="contactInput" />
          </div>

          <input type="text" {...register('subject')} placeholder="Subject" className="contactInput" />

          <textarea
            className="contactInput"
            placeholder="Message"
            {...register('message')}
          />

          <button
            type="submit"
            className="bg-sky-500 py-[10px] px-5 md:py-5 md:px-10 rounded-md text-black font-bold text-lg "
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
