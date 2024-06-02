import React from 'react'
import contact from '/assets/img/contact.png'
import Form from '../Form/Form'
import data from '../../../../public/assets/data/data.json';

const VisitUs = () => {
  return (
    <>
    
      <div className="p-8 bg-white md:w-3/4 lg:w-full">
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="md:w-1/2 ">
            <img
              src={contact}
              alt="Dentist"
              className="w-3/4 rounded-lg mt-11"
            />
          </div>
          <div className="mt-4 md:w-1/2 md:mt-0">
            <Form/>
           
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 p-5 mt-24 md:grid-cols-3">
          <div className="p-24 text-center bg-blue-300 rounded-3xl">
            <h3 className="mb-2 text-2xl font-bold">CALL US</h3>
            <p>{data.addresses.phone}</p>
            <p>{data.addresses.phone2}</p>
          </div>
          <div className="p-24 text-center bg-blue-300 rounded-3xl">
            <h3 className="mb-2 text-2xl font-bold">LOCATION</h3>
            <p>{data.addresses.location}</p>
            <p>{data.addresses.location2}</p>
          </div>
          <div className="p-24 text-center bg-blue-300 rounded-3xl">
            <h3 className="mb-2 text-2xl font-bold">HOURS</h3>
            <p>{data.addresses.time}</p>
            <p>{data.addresses.time2}</p>
          </div>
        </div>

        <div className="mt-8">
          <iframe className='rounded-2xl'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.165706126054!2d73.01058127529247!3d34.49868309402632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38de6de159470aa3%3A0x4010c1c6f1bb2eca!2sBagh%20Homoeo%20Clinic!5e0!3m2!1sen!2s!4v1716713150743!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    
   </>
  )
}

export default VisitUs