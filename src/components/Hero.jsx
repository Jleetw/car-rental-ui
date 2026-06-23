import { useState } from "react"
import { assets, cityList } from "../assets/assets"

const Hero = () => {

  const [pickUpLocation, setPickUpLocation] = useState('');

  return (
    <div className='h-screen flex flex-col items-center justify-center gap-14 bg-light text-center'>
      <h1 className="text-4xl md:text-5xl font-semibold">Luxury cars on rent</h1>
      <form className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:ml-8">
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="pickUpLocation">Pick up Location</label>
            <select required id="pickUpLocation" value={pickUpLocation} onChange={(e)=>setPickUpLocation(e.target.value)} className="text-sm text-gray-500 outline-none ml-[-0.3rem]" >
              <option value="">
                Please select location
              </option>
                {cityList.map((city)=> <option key={city} value={city}>{city}</option>)}
            </select>
          </div>
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="pickUpDate">Pick up Date</label>
            <input required type="date" id="pickUpDate" min={new Date().toISOString().split('T')[0]} className="px-1 text-sm text-gray-500 outline-none" />
          </div>
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="returnDate">Return Date</label>
            <input required type="date" id="returnDate" min={new Date().toISOString().split('T')[0]} className="px-1 text-sm text-gray-500 outline-none" />
          </div>
          <button className="flex items-center justify-center gap-1 px-9 py-3 max-sm:mt-4 bg-primary hover:bg-primary-dull text-white rounded-full cursor-pointer">
            <img src={assets.search_icon} alt="search" className="brightness-300" />
            Search
          </button>
        </div>
      </form>
      <img src={assets.main_car} alt="car" className="max-h-74" />
    </div>
  )
}

export default Hero