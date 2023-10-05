import React from "react";

export default function CardAtom({ name, imageUrl, stats, overview, buttonText, buttonLink }) {
  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"> 
      <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full max-w-full flex-grow flex-1">
            <h6 className="uppercase text-orangeGray-100 mb-1 text-xs font-semibold">
              {overview}
            </h6>
            <h2 className="text-orangeGray-700 text-xl font-semibold">{name}</h2>
          </div>
        </div>
      </div>
      <div className="p-4 flex-auto">
        <div className="relative h-350-px">
          <img
            src={imageUrl}
            alt={name}
            className="object-cover w-full h-full rounded"
          />
        </div>
        <div className="mt-4">
          <h3 className="text-orangeGray-700 text-lg font-semibold">Información</h3> 
          <ul className="text-orangeGray-500 mt-2"> 
            {stats.map((stat, index) => (
              <li key={index} className="mb-1">
                {stat.label}: {stat.value}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <a href={buttonLink} className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}