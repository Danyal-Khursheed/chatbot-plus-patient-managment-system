import React from 'react'
import data from '../../../../public/assets/data/data.json';

const About = () => {
  return (
   
   <>
   <div className="flex flex-col items-center justify-center min-h-screen p-8 md:flex-row bg-gray-50">
      <div className="flex justify-center md:w-1/2">
        <img
          src={data.clinic.image} 
          alt="About Us"
          className="w-full max-w-3xl rounded-lg"
        />
      </div>
      <div className="mt-8 md:w-1/2 md:mt-0 md:ml-16">
        <h2 className="mb-4 font-bold text-7xl">{data.clinic.name}</h2>
        <p className="w-full mb-4 text-gray-700">
         {data.clinic.description}
        </p>
        <p className="text-black-700">
        <ul className="pl-5 text-gray-700 list-disc">
          {data.clinic.services.map((service, index) => (
            <li key={index} className="mb-1">{service}</li>
          ))}
        </ul>
        </p>
       
      </div>
    </div>

    {/* About Docter */}
    <div className="flex flex-col items-center justify-center min-h-screen p-8 md:flex-row bg-gray-50">
    <div className="mt-8 md:w-1/2 md:mt-0 md:ml-16">
        <h2 className="mb-4 font-bold text-blue-400 text-7xl ">{data.about.name}</h2>
        <h2 className="mb-4 text-3xl font-bold">{data.about.qualification}</h2>
        <p className="w-full mb-4 text-gray-700">
         {data.about.description}
        </p>
        
       
      </div>
      
      <div className="flex justify-center md:w-1/2">
        <img
          src={data.banner.image}
          alt="About Us"
          className="w-1/2 rounded-lg"
        />
      </div>
      
    </div>
   </>
  )
}

export default About