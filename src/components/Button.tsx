"use client";
import { useState } from "react";

type IButton = {
  name: string;
};

function Button() {
  const items = [
    "دیفای",
    "حریم خصوصی",
    "متاورس",
    "قابل استخراج",
    "میم کوین",
    "استیبل کوین",
    "توکن",
    "ICO",
  ];

  const [isOpen, setIsOpen] = useState(false);


  const [selected, setSelected] = useState(items[0]);

  return (
    <div className="relative  w-full">

     
      <div className="hidden md:flex justify-between gap-2">
        {items.map((item) => (
          <button className="bg-gray-100 px-2 rounded py-2 hover:bg-sky-500 hover:text-white" key={item}>{item}</button>
        ))}
      </div>

     
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden py-2 px-4 bg-gray-200 rounded w-full text-right"
      >
        {selected}
      </button>

      
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-full bg-white shadow-md rounded flex flex-col gap-2 md:hidden p-3 z-50">

          {items.map((item) => (
            <button
              key={item}
              className="py-2 px-4 bg-gray-100 rounded hover:bg-sky-500 hover:text-white text-right"
              onClick={() => {
                setSelected(item); 
                setIsOpen(false);  
              }}
            >
              {item}
            </button>
          ))}

        </div>
      )}
    </div>
  );
}

export default Button;
