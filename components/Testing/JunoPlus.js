import React from "react";
import checkmark from '../../styles/images/check.svg'
import Image from 'next/image'

function JunoPlus() {
  return (
    <div>
        <div className=" bg-green-400 bg-opacity-10 ">
            <h1 className="text-center font-semibold text-4xl text-orange-400">Juno+</h1>
            <h2 className="mt-1 text-center font-semibold text-2xl text-green-500">Let Humans do the Other Half</h2>
        </div>
        <div className="mt-2 flex items-center justify-center">
            <ul className="">
                <li className="flex items-center space-x-2">
                    <div className="relative h-10 w-10">
                        <Image src={checkmark} layout="fill" objectFit="contain" />
                    </div>
                    <p className="font-bold text-gray-700 text-xl lg:text-2xl">Search Engine Optimized</p>
                </li>
                <li className="flex items-center space-x-2">
                    <div className="relative h-10 w-10">
                        <Image src={checkmark} layout="fill" objectFit="contain" />
                    </div>
                    <p className="font-bold text-gray-700 text-xl lg:text-2xl">Fact Checked + Reviewed</p>
                </li>
                <li className="flex items-center space-x-2">
                    <div className="relative h-10 w-10">
                        <Image src={checkmark} layout="fill" objectFit="contain" />
                    </div>
                    <p className="font-bold text-gray-700 text-xl lg:text-2xl">Published for You!</p>
                </li>
            </ul>
        </div>
        <div className="flex items-center justify-center mt-5">
            <button className="bg-green-700/90 px-6 py-3 rounded-full">
                <h2 className="text-white font-bold text-xl">Join Juno+</h2>
                <p className="text-gray-200 text-sm">Just $99 Per Article</p>
            </button>
        </div>
    </div>
  );
}

export default JunoPlus;
