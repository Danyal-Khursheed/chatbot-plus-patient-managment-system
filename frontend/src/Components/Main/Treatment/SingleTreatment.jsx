import React from 'react';
import { useParams } from 'react-router-dom';
import data from './../../../../public/assets/data/data.json';

const SingleTreatment = () => {
  const { id } = useParams();
  const offer = data.offers.find(offers => offers.id === id);

  if (!offer) {
    return <div className="text-center text-red-500">Offer not found</div>;
  }

  return (
  
      <div className="flex flex-col md:flex-row">
        <div className="w-full p-5 mt-52 md:w-1/2">
          <h2 className="mb-4 font-bold text-7xl">{offer.name}</h2>
          <p className="mb-4 text-2xl">{offer.description}</p>
          
        </div>
        <div className="flex justify-center w-full p-5 md:w-1/2">
          <img src={offer.image} alt={offer.name} className="w-full h-auto rounded md:w-2/3" />
        </div>
      </div>
    
  );
};

export default SingleTreatment;
