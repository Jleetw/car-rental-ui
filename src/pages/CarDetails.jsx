import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { assets, dummyCarData } from '../assets/assets'

const CarDetails = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const selectedCar = dummyCarData.find((car) => car._id === id);
    setCar(selectedCar);
  }, [id]);

  return car ?(
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-16">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 mb-6 text-gray-500 cursor-pointer">
        <img src={assets.arrow_icon} alt="arrow" className="rotate-180 opacity-65" />
        Back 
      </button>
      
    </div>
  ) : <p>Loading...</p>
}

export default CarDetails